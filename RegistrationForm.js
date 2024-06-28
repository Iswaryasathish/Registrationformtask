import React from 'react';
import {useForm} from 'react-hook-form';
import './Form.css';

const RegistrationForm=()=>{
  const {register,handleSubmit,formState:{errors}}=useForm();
     const onSubmit=(data)=>{
      console.log(data);
     };
     return(
      <form onSubmit={handleSubmit(onSubmit)} className="Register-Form">
        <div className="Form-details">
          <label>First Name</label>
          <input {...register('firstName',{required:true})}/>
          {errors.firstName && <span className="error">First name is required</span>}
        </div>
        <div className="Form-details">
          <label>Last Name</label>
          <input {...register('lastName',{required:true})}/>
          {errors.lastName && <span className="error">Last name is required</span>}
        </div>
        <div className="Form-details">
          <label>Gender</label>
          <select {...register('gender',{required:true})}>
            <option value="">Select..</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">Gender select is required</span>}
        </div>
        <div className="Form-details">
          <label>Email ID</label>
          <input {...register('email',{required:true,pattern:/^[^@]+@[^@]+\.[^@.]{2,}$/})}/>
          {errors.email &&<span className="error">Valid email is required</span>}
        </div>
        <div className="Form-details">
          <label>Password</label>
          <input type="password"{...register('password',{required:true,minLength:6})}/>
          {errors.password &&<span className="error">Password must be atleast 6 characters</span>}
        </div>
        <div className="Form-details">
          <label>Phone Number</label>
          <input {...register('phoneNumber',{required:true,pattern:/^[0-9]{10}$/})}/>
          {errors.phoneNumber &&<span className="error">Valid Phone number is required</span>}
        </div>
        <div className="Form-details">
          <label>Adress</label>
          <input {...register('address',{required:true})}/>
          {errors.address &&<span className="error">Address is required</span>}
        </div>
        <div className="Form-details">
          <label>Courses</label>
          <select {...register('course',{required:true})}>
            <option value="">Select..</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
          {errors.course && <span className="error">Couse select is required</span>}
        </div>
        <div className="Form-details">
          <label>Language</label>
          <select {...register('language',{required:true})}>
            <option value="">Select..</option>
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
            <option value="hindi">Hindi</option>
          </select>
          {errors.language && <span className="error">Language select is required</span>}
        </div>
        <div className="Form-details">
          <label>Comment Box</label>
          <textarea {...register('comment')}/>
        </div>
        <button type="submit">Submit</button>
        
      </form>
     );
    }
    export default RegistrationForm;