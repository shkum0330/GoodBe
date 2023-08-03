package com.goodbe.business.domain.file;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class FileStore {
    @Value("${file.dir}")
    private String fileDir;

    public String getFullPath(String fileName){
        return fileDir+fileName;
    }

    public List<UploadFile> storeFiles(List<MultipartFile> multipartFiles) throws IOException {
        List<UploadFile> storeFileResult=new ArrayList<>();
        for(MultipartFile multipartFile:multipartFiles){
            if(!multipartFile.isEmpty()) storeFileResult.add(storeFile(multipartFile));
        }
        return storeFileResult;
    }

    public UploadFile storeFile(MultipartFile multipartFile) throws IOException {
        if(multipartFile == null || multipartFile.isEmpty()) {
            return null;
        }
        String originalFilename=multipartFile.getOriginalFilename();
        String storeFileName=createStoreFileName(originalFilename);
        multipartFile.transferTo(new File(getFullPath(storeFileName)));
        return new UploadFile(originalFilename,storeFileName);
    }

    private String createStoreFileName(String originalFilename){
        String ext=extractExt(originalFilename);
        String uuid= UUID.randomUUID().toString();
        return uuid+"."+ext;
    }

    private String extractExt(String originalFilename){
        int pos=originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos+1);
    }

    public void deleteFile(String fileName) {
        try {
            Path filePath = Paths.get(fileDir).resolve(fileName);
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
