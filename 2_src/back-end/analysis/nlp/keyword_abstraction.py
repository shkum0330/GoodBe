from krwordrank.word import summarize_with_keywords
import json_data_parser as sd
from keybert import KeyBERT
from kiwipiepy import Kiwi
from transformers import BertModel

def keyword_abstraction(keyword):
    data_list = sd.get_job_post_by_keyword("keyword")