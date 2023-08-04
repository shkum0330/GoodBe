import React, { useEffect } from 'react';

export default function BoardWriteForm() {
  useEffect(() => {
    const loadEditorScript = () => {
      const script = document.createElement('script');
      script.src = '../resources/static/smarteditor/js/HuskyEZCreator.js';
      script.charset = 'utf-8';
      script.async = true;
      document.body.appendChild(script);
      script.onload = smartEditor;
    };

    const smartEditor = () => {
      console.log("Naver SmartEditor");
      if (typeof nhn !== 'undefined' && nhn.husky && nhn.husky.EZCreator) {
        const oEditors = [];
        nhn.husky.EZCreator.createInIFrame({
          oAppRef: oEditors,
          elPlaceHolder: "editorTxt1",
          sSkinURI: "SmartEditor2Skin.html",
          fCreator: "createSEditor2"
        });
      }
    };

    loadEditorScript();
  }, []);

  return (
    <div>
      <h3>Naver Smart Editor 2.0</h3>
      <form action="insertStudentInfoForm" method="post">
        <div id="smarteditor">
          <textarea
            name="editorTxt"
            id="editorTxt1"
            rows="20"
            cols="10"
            placeholder="내용을 입력해주세요"
            style={{ width: 500 }}
          />
        </div>
        <input type="button" />
      </form>
    </div>
  );
}
