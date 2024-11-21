import React from 'react';
import { Input, TextArea, Form, Button } from 'semantic-ui-react';
import './QuestionPage.css';

const QuestionPage = () => {
  return (
    <div className="question-page">
      <h2>What do you want to ask or share?</h2>
      
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input placeholder="Start your question with how, what, why, etc." />
        </Form.Field>
        <Form.Field>
          <label>Describe your problem</label>
          <TextArea placeholder="Describe your problem in detail" />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <Input placeholder="Please add up to 3 tags e.g., Java" />
        </Form.Field>
        <Button primary>Post</Button>
      </Form>
    </div>
  );
};

export default QuestionPage;
