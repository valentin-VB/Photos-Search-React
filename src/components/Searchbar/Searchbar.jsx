import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import Button from 'components/Button';
import { Header, Input, StyledForm } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const initialValues = {
    searchQuery: '',
  };

  const handelSubmit = (values, actions) => {
    if (values.searchQuery.trim() === '') {
      return;
    }
    onSubmit(values.searchQuery);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik onSubmit={handelSubmit} initialValues={initialValues}>
        <StyledForm>
          <Input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Input>
          <Button></Button>
        </StyledForm>
      </Formik>
    </Header>
  );
};

export default Searchbar;
