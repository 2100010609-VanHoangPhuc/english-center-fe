// Generated by https://quicktype.io

export interface Result {
  id: number;
  total_point: number;
  total_question_correct: number;
  total_question_skip: number;
  exam_id: number;
  name_exam: string;
  user_id: number;
  time_complete: string;
  created_at: string;
  list_result_detail: ListResultDetail[];
}

export interface ListResultDetail {
  id: number;
  content: null;
  paragraph: null;
  result_id: number;
  answer_correct: string;
  answer_user_choose: string;
  exam_id: number;
  is_correct: number;
  sort: number;
  is_answer: number;
  answer_a: null;
  answer_b: null;
  answer_c: null;
  answer_d: null;
  exam_detail_id: number;
  url_image: null;
}
