import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  validateConcent,
  validateDate,
  validateReason,
  validateTitle,
} from './validationFunctions';
import { IFormValues, IPropsFormComponentHook } from '../../types/types';

function FormComponentHook(props: IPropsFormComponentHook) {
  const { updateFormCards } = props;
  const [cardCreated, setCardCreated] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({ reValidateMode: 'onSubmit' });

  function createValidationObject(data: IFormValues) {
    return {
      id: Date.now(),
      title: data.title,
      date: data.date,
      reason: data.reason,
      concent: data.concent,
      radio: data.radio,
      inputFile: URL.createObjectURL(data.inputFile[0]),
    };
  }

  function onSubmit(data: IFormValues) {
    updateFormCards(createValidationObject(data));
    setCardCreated(true);
    setTimeout(() => {
      setCardCreated(false);
    }, 3000);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="text"
        placeholder="Enter product name"
        {...register('title', {
          required: true,
          validate: (value) => validateTitle(value),
        })}
      />
      {errors.title && (
        <div className="valError">
          The name should start from the capital letter and be at least 3 chars
          long
        </div>
      )}
      <label htmlFor="date">
        Enter purchase date
        <input
          type="date"
          {...register('date', {
            required: true,
            validate: (value) => validateDate(value),
          })}
        />
        {errors.date && (
          <div className="valError">Please enter the past date</div>
        )}
      </label>
      <label htmlFor="returnReason">
        Choose return reason
        <select
          {...register('reason', {
            required: true,
            validate: (value) => validateReason(value),
          })}
        >
          <option>-choose the reason-</option>
          <option>Defect</option>
          <option>Other (didn&apos;t fit, etc)</option>
        </select>
        {errors.reason && (
          <div className="valError">Please choose the reason of return</div>
        )}
      </label>
      <label htmlFor="concent">
        I have read the terms of Return Policy and agree with it
        <input
          type="checkbox"
          className="form__checkbox"
          {...register('concent', {
            required: true,
            validate: (value) => validateConcent(value),
          })}
        />
        {errors.concent && (
          <div className="valError">
            Please read the return policy and if you agree mark the checkbox
          </div>
        )}
      </label>
      <label htmlFor="radioReturn" className="form__label-radio">
        <label htmlFor="radioReturn">
          <input
            type="radio"
            {...register('radio', {
              required: true,
            })}
            value="Return money"
            name="radio"
            id="radioReturn"
          />
          Return money
        </label>
        <label htmlFor="radioExchange">
          <input
            type="radio"
            {...register('radio')}
            value="Exchange to another product"
            name="radio"
            id="radioExchange"
          />
          Exchange to another product
        </label>
        {errors.radio && (
          <div className="valError">Please choose return option</div>
        )}
      </label>
      <label htmlFor="loadFile">
        Choose your image
        <input
          type="file"
          className="input-file"
          accept="image/jpeg,image/png,image/gif"
          {...register('inputFile', { required: true })}
        />
        {errors.inputFile && (
          <div className="valError">Please choose an image</div>
        )}
      </label>
      <button type="submit" className="form__submit">
        Submit
      </button>
      {cardCreated && (
        <div className="form__message">
          The card has been successfully created!
        </div>
      )}
    </form>
  );
}

export default FormComponentHook;
