import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
// import type { LoginFieldsProps, RegisterFieldsProps } from "@/components/types";
import { homePagetabsMenu, loginButtons, loginFields, registerFields, registerButtons, registerationPoints } from '@/helper/data';
import { Navbar, HeroCard, Button, Tabs, CustomCheckbox, CustomInput, CustomLabel, Footer } from "@/components";

const Login = ({ setLoggedIn }: any) => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [activeMainTab, setActiveMainTab] = useState<number>(1);

  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState<boolean>(false);

  // const [loginField, setLoginField] = useState<LoginFieldsProps>({
  //   Email: "",
  //   Password: ""
  // });

  // const [registerField, setRegisterField] = useState<RegisterFieldsProps>({
  //   Username: "",
  //   Email: "",
  //   Password: ""
  // });

  console.log(setLoggedIn);

  const handleLoginTab = () => {
    setShowRegister(false);
    setShowLogin(true);
  }

  const handleRegisterTab = () => {
    setShowRegister(true);
    setShowLogin(false);
  }

  // const handleLogin = () => {
  //   console.log("clicked const handleLogin ");
  //   // localStorage.setItem("auth", "true");
  //   // setLoggedIn(true);
  //   // navigate("/dashboard");
  // };


  const loginSchema = Yup.object().shape({
    Email: Yup.string().email().required("Email is Required."),
    Password: Yup.string()
      .required("Password is Required.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "Password must contain a number and a special character."
      ),
  });

  const registerSchema = Yup.object().shape({
    Username: Yup.string().required("Username is Required."),
    Email: Yup.string().email().required("Email is Required."),
    Password: Yup.string()
      .required("Password is Required.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "Password must contain a number and a special character."
      ),
  });

  const loginFormik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values, { resetForm }) => {
      const newUser = {
        Email: values.Email,
        Password: values.Password,
      };

      console.log("values", newUser);
      console.log("values", loginFormik.values);
      resetForm();
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    },

  });

  const registerFormik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      Username: "",
    },

    validationSchema: registerSchema,

    onSubmit: (values, { resetForm }) => {
      const newUser = {
        Email: values.Email,
        Password: values.Password,
        Username: values.Username,
      };

      console.log("values", newUser);
      console.log("values", registerFormik.values);
      resetForm();
      localStorage.setItem("auth", "true");
      navigate("/login");
    },

  });

  // const loginValues = loginFormik.values as Record<string, any>;
  const loginErrors = loginFormik.errors as Record<string, any>;
  const loginTouched = loginFormik.touched as Record<string, any>;

  // const registerValues = registerFormik.values as Record<string, any>;
  const registerErrors = registerFormik.errors as Record<string, any>;
  const registerTouched = registerFormik.touched as Record<string, any>;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/img/bg-image.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000",
        backgroundPosition: "-285.5px 100px",
        backgroundSize: "1920px auto"
      }}
    >
      <Navbar />

      <Tabs
        className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] p-0 mb-[50px] hidden md:block"
        tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
        tabs_list={homePagetabsMenu}
        tabItemClass="svgInactive"
        activeTabClass="bg-white ASSSSS"
        inActiveTabClass="hover:bg-white"
        activeTextClass="text-[#253A86]"
        inactiveTextClass="text-white group-hover:text-[#253A86]"
        activeTab={activeMainTab}
        variant="route"
        onClick={(id) => setActiveMainTab(id)} />

      <section className="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 md:px-4 lg:px-0 my-[50px] flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] items-start">
        <HeroCard parentClass="!max-w-[624px] !p-0 !rounded-[20px]">
          <div className="flex items-center h-[57px] bg-white rounded-t-[20px]">
            <div className="w-full h-full flex items-center justify-center cursor-pointer rounded-tl-[20px]" onClick={handleLoginTab}>
              <h2 className="text-[18px] md:text-[25px] font-medium text-[#000000] leading-[30px]">Log In</h2>
            </div>
            <div className="w-full h-full flex items-center justify-center cursor-pointer bg-[#F1F1F1] rounded-tr-[20px]" onClick={handleRegisterTab}>
              <h2 className="text-[18px] md:text-[25px] font-medium text-[#000000] leading-[30px]">Register</h2>
            </div>
          </div>

          <div className={`px-[40px] py-[30px] rounded-b-[20px] ${showLogin ? "bg-white" : "bg-[#F1F1F1]"}`}>
            {showLogin &&
              <div>
                <h2 className="text-[18px] md:text-[25px] font-medium text-[#000000] mb-[30px] text-center md:text-start px-4">
                  Hello! Welcome back!</h2>
                <div className="">

                  {loginButtons.map((button, index) => {
                    return (
                      <Button type="button" key={index} text={button.link_text}
                        onClick={() => console.log(button.link_text)}
                        icon={<img src={button.icon} alt="Icon" />}
                        className="w-full h-[41px] lowercase bg-white border-[0.64px] border-[#626262] 
                        font-normal text-xs text-[#626262] mb-[15px] cursor-pointer 
                        transition-all duration-200 hover:opacity-80" />
                    )
                  })}

                  <div className="flex items-center mb-[30px]">
                    <hr className="border-[#626262] w-full my-[5px]" />
                    <span className="font-normal leading-[20px] text-[10px] md:text-[12px] text-[#626262] px-[6px]">Order</span>
                    <hr className="border-[#626262] w-full my-[5px]" />
                  </div>

                  <form noValidate onSubmit={loginFormik.handleSubmit}>
                    <div>
                      {loginFields.map((field, index) => {
                        return (
                          <div key={index} className="mb-[30px]">
                            <CustomLabel
                              className="!text-[12px] block mb-[10px]"
                              text={field.input_label}
                            />

                            <CustomInput
                              type={field.type === "password" && !showLoginPassword ? "password" : "text"}
                              name={field.id}
                              icon={<img src={field.icon} alt={field.icon} />}
                              placeholder={field.placeholder}
                              onBlur={loginFormik.handleBlur}
                              onChange={(value) => {
                                loginFormik.setFieldValue(field.id, value);
                              }}
                              value={loginFormik.values[field.id as keyof typeof loginFormik.values]}
                              className="!text-[12px] w-full border-[0.64px] h-[42px] p-[14px]"
                            />

                            {loginTouched[field.id] && loginErrors[field.id] && (
                              <div className="text-red-600 text-sm leading-7">
                                {loginErrors[field.id]}
                              </div>
                            )}
                          </div>
                        )
                      })}

                      <CustomCheckbox
                        id="Show password"
                        name="Show password"
                        value="Show password"
                        checkboxParent="md:justify-end"
                        custom_label_for="Show password"
                        inputClassName=""
                        labelClassName="!text-[15px]"
                        custom_label_text="Show password"
                        checked={showLoginPassword}
                        onChange={() => {
                          setShowLoginPassword(!showLoginPassword);
                        }}
                      />
                    </div>

                    <Button type="submit" text="Log In"
                      // onClick={handleLogin}
                      className="mt-[30px] w-full flex justify-center 
                      !bg-[#B1222C] border-[#B1222C] 
                      font-semibold text-xs lg:text-[18px] leading-[12px] !text-white h-[41px] 
                      cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </form>

                </div>
              </div>
            }

            {showRegister &&
              <div>
                <h2 className="text-[18px] md:text-[25px] font-medium text-[#000000] mb-[30px] text-center md:text-start px-4">
                  Want to Register?</h2>
                <div className="">

                  {registerButtons.map((button, index) => {
                    return (
                      <Button type="button" key={index} text={button.link_text}
                        onClick={() => console.log(button.link_text)}
                        icon={<img src={button.icon} alt="Icon" />}
                        className="w-full h-[41px] lowercase bg-[#F1F1F1] border-[0.64px] border-[#626262] 
                        font-normal text-xs text-[#626262] mb-[15px] cursor-pointer 
                        transition-all duration-200 hover:opacity-80" />
                    )
                  })}

                  <div className="flex items-center mb-[30px]">
                    <hr className="border-[#626262] w-full my-[5px]" />
                    <span className="font-normal leading-[20px] text-[10px] md:text-[12px] text-[#626262] px-[6px]">Order</span>
                    <hr className="border-[#626262] w-full my-[5px]" />
                  </div>

                  <form noValidate onSubmit={registerFormik.handleSubmit}>
                  <div>
                    {registerFields.map((field, index) => {
                      return (
                        <div key={index} className="mb-[30px]">
                          <CustomLabel
                            className="!text-[12px] block mb-[10px]"
                            text={field.input_label}
                          />

                          <CustomInput
                            type={field.type === "password" && !showRegisterPassword ? "password" : "text"}
                            name={field.id}
                            icon={<img src={field.icon} alt={field.icon} />}
                            placeholder={field.placeholder}
                            onBlur={registerFormik.handleBlur}
                              onChange={(value) => {
                                registerFormik.setFieldValue(field.id, value);
                              }}
                              value={registerFormik.values[field.id as keyof typeof registerFormik.values]}
                            className="!text-[12px] w-full border-[0.64px] h-[42px] p-[14px]"                          
                          />

                           {registerTouched[field.id] && registerErrors[field.id] && (
                              <div className="text-red-600 text-sm leading-7">
                                {registerErrors[field.id]}
                              </div>
                            )}
                        </div>
                      )
                    })}

                    <CustomCheckbox
                      id="Show password"
                      name="Show password"
                      value="Show password"
                      checkboxParent="md:justify-end"
                      custom_label_for="Show password"
                      inputClassName=""
                      labelClassName="!text-[15px]"
                      custom_label_text="Show password"
                      checked={showRegisterPassword}
                      onChange={() => {
                        setShowRegisterPassword(!showRegisterPassword);
                      }}
                    />
                  </div>

                  <Button type="submit" text="Register"
                    className="mt-[30px] w-full flex justify-center 
                    !bg-[#B1222C] border-[#B1222C] 
                    font-semibold text-xs lg:text-[18px] leading-[12px] !text-white h-[41px] 
                    cursor-pointer transition-all duration-200 hover:opacity-80" />
                </form>

                </div>
              </div>
            }
          </div>
        </HeroCard>

        <HeroCard parentClass="!max-w-[624px] !p-0 !rounded-[20px]">
          <div className="h-[57px] bg-white rounded-t-[20px]">
            <div className="w-full h-full flex items-center justify-start cursor-pointer rounded-tl-[20px]">
              <h2 className="text-[18px] md:text-[25px] font-medium text-[#000000] leading-[30px] px-[50px]">Not registered yet?</h2>
            </div>
          </div>

          <div className={`px-[40px] py-[30px] rounded-b-[20px]`}>
            <div>
              <h3 className="font-medium text-[16px] lg:text-[18px] leading-[27px] text-[#627084]">When is registration required:</h3>
              <div>

                <ul className="list-disc list-inside my-6 lg:my-[27px]">
                  {registerationPoints.map((regPoint) => {
                    return (
                      <li key={regPoint.id} className="font-normal text-[14px] lg:text-[16px] text-[#94A3B3] leading-[32px]">
                        {regPoint.point}
                      </li>
                    )
                  })}
                </ul>

                <h4 className="mb-[15px] font-normal text-[14px] lg:text-[16px] text-[#94A3B3] leading-[32px]">The number of posts may be limited or dependent on the type of registration and subscription.</h4>
              </div>

              <Button type="button" text="I want to register"
                className="mt-[30px] w-full flex justify-center 
                !bg-[#B1222C] border-[#B1222C] 
                font-semibold text-xs lg:text-[18px] leading-[12px] !text-white h-[41px] 
                cursor-pointer transition-all duration-200 hover:opacity-80" />
            </div>
          </div>
        </HeroCard>
      </section>

      <Footer />
    </div>
  );
};

export default Login;