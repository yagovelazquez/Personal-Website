import React from "react";
import { Formik } from "formik";
import {
  Form,
  Input,
  Title,
  Title2,
  Text,
  Button,
  Label,
  TextArea,
  ServerResponse,
  ModalBodyContainer,
} from "./ContactForm.styled";
import * as Yup from "yup";
import { serverUrl } from "../../ReactQuery/queryUrl";

import Modal from "../Modal";
import { useMutation } from "react-query";
import { generalPostCall } from "./../../lib/fetchServer";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import LoadingSpinnerWrapper from "../styled/LoadingSpinner.styled";

function ContactForm() {
  const logUrl = `${serverUrl}/contact-me`;

  const { mutate, error, isLoading, data } = useMutation((values) => {
    return generalPostCall(values, logUrl);
  });

  const ModalContent = () => {
    return (
     <ModalBodyContainer>
        <LoadingSpinnerWrapper>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </LoadingSpinnerWrapper>
        </ModalBodyContainer> 
      
    );
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please insert a valid name"),
    message: Yup.string().required("Please insert a valid message"),
    email: Yup.string()
      .email("Please insert a valid email")
      .required("Please insert a valid email"),
  });

  return (
    <>
      <Modal isOpen={isLoading} ModalContent={ModalContent}></Modal>
      <Title2>CONTACT ME</Title2>
      <Title>Let´s get in touch</Title>
      <Formik
        initialValues={{ name: "", message: "", email: "" }}
        validationSchema={contactSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          mutate(values, resetForm);
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <Form onSubmit={handleSubmit}>
            {error && (
              <ServerResponse>
                Something went wrong, please try again.
              </ServerResponse>
            )}
            {data && (
              <ServerResponse success>
                {" "}
                <IoCheckmarkCircleOutline color="#307a07" size="25px" /> Message
                sent! I will be answering as fast as possible.
              </ServerResponse>
            )}
            <Label>
              NAME
              {touched.name && errors.name && (
                <Text color="red">{errors.name}</Text>
              )}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                border={touched.name && errors.name && "1px solid red"}
                type="text"
                name="name"
                placeholder="Name"
              />
            </Label>
            <Label>
              EMAIL
              {touched.email && errors.email && (
                <Text color="red">{errors.email}</Text>
              )}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                border={touched.email && errors.email && "1px solid red"}
                type="email"
                name="email"
                placeholder="Email"
              />
            </Label>
            <Label>
              MESSAGE
              {touched.message && errors.message && (
                <Text color="red">{errors.message}</Text>
              )}
              <TextArea
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                rows="4"
                border={touched.message && errors.message && "1px solid red"}
                type="text"
                name="message"
                placeholder="Message"
              />
            </Label>
            <Button type="submit">Send message</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
