import * as Yup from "yup";
import { useState } from 'react';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Navbar, HeroCard, Button, CustomSelect, Tabs, Faq, CustomLabel, CustomCheckbox, Footer } from "@/components";
import { sectionTabsMenu, sectionInnerTabsMenu, selectionDropdownData, checkboxList, InformationParagraph } from '@/helper/data';

const fieldMap: Record<number, string> = {
    1: "Brand",
    2: "Model",
    3: "Body_Shape",
    4: "Year_Month",
};

const SectionSelection = () => {
    const navigate = useNavigate();

    const [activeMainTab, setActiveMainTab] = useState<number>(3);
    const [activeTab, setActiveTab] = useState<number>(-1);

    // FIXED VALIDATION (must match initialValues keys)
    const validationSchema = Yup.object().shape({
        Brand: Yup.string().required("Brand Name is Required."),
        Model: Yup.string().required("Model Name is Required."),
        Body_Shape: Yup.string().required("Body Shape is Required."),
        Year_Month: Yup.string().required("Year & Month is Required."),
        fuelType: Yup.array()
            .min(1, "Minimum 1 fuel type is required.")
            .max(1, "Maximum 1 fuel type is required.")
            .required("Fuel Type is required."),
    });

    type FormValues = {
        Brand: string;
        Model: string;
        Body_Shape: string;
        Year_Month: string;
        fuelType: string[],
        [key: string]: any;
    };

    const initialFuel = checkboxList
        .filter((item) => item.check)
        .map((item) => item.label);

    // FIXED INITIAL VALUES (MAIN ISSUE FIXED)
    const formik = useFormik<FormValues>({
        initialValues: {
            Brand: "",
            Model: "",
            Body_Shape: "",
            Year_Month: "",
            fuelType: initialFuel,
        },

        validationSchema,

        onSubmit: (values, { resetForm }) => {
            console.log("onsubmit values", values);

            resetForm();

            navigate("/ad-content");
        },
    });

    const handleCheckboxChange = (value: string) => {
        formik.setFieldValue("fuelType", [value]);
        formik.setFieldTouched("fuelType", true);
    };

    const handleBlur = () => {
        formik.setFieldTouched("fuelType", true);
    };

    // const values = formik.values as Record<string, any>;
    const errors = formik.errors as Record<string, any>;
    const touched = formik.touched as Record<string, any>;

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
                tabs_list={sectionTabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white ASSSSS"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="md:px-4 lg:px-0">
                <HeroCard parentClass="!bg-[#F9FAFB] !py-[25px] !px-[30px]">
                    <div>
                        <Tabs
                            className="w-full text-white min-h-[42px] p-0 mb-2 sm:mb-[50px]"
                            tabContainerClass="w-full max-w-[972px] mx-auto px-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[6px] lg:gap-[8px]"
                            tabs_list={sectionInnerTabsMenu}
                            tabItemClass="bg-white rounded-[6px]"
                            tabItemClassInner="text-[11px] font-semibold text-[#253A86]"
                            activeTabClass="!bg-[#B1222C]"
                            inActiveTabClass="hover:bg-[#B1222C]"
                            activeTextClass="text-white"
                            inactiveTextClass="text-[#253A86] group-hover:text-white"
                            activeTab={activeTab}
                            variant="state"
                            onClick={(id) => setActiveTab(id)}>
                            {activeTab !== -1 && (
                                <form noValidate onSubmit={formik.handleSubmit}>
                                    <div className="bg-[#F9FAFB]">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                            {selectionDropdownData.map((dropdown, index) => {
                                                const baseField =
                                                    fieldMap[dropdown.id as keyof typeof fieldMap];
                                                return (
                                                    <div key={`${dropdown.id}-${index}`}>
                                                        {/* Label (common) */}
                                                        <CustomLabel
                                                            className="block text-[15px] text-[#627084] mt-[40px] lg:mt-0 mb-[12px]"
                                                            text={dropdown.label}
                                                        />

                                                        {dropdown.dropDownCount > 1 ? (
                                                            <div className="flex items-center gap-[10px]">
                                                                {[...Array(dropdown.dropDownCount)].map((_, i) => {
                                                                    const fieldName = baseField; // NO -i suffix

                                                                    return (
                                                                        <div key={`${fieldName}-${i}`} className="flex-1">
                                                                            <CustomSelect
                                                                                key={fieldName}
                                                                                options={dropdown.options}
                                                                                divider={false}
                                                                                name={fieldName}
                                                                                value={formik.values[fieldName] || ""}
                                                                                onChange={(value) =>
                                                                                    formik.setFieldValue(fieldName, value)
                                                                                }
                                                                                onBlur={(fieldName) => {
                                                                                    if (fieldName) {
                                                                                        formik.setFieldTouched(fieldName, true);
                                                                                    }
                                                                                }}
                                                                                customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                                                </svg>
                                                                                }
                                                                                className="w-full !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                                innerOptionsClass="!bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                            />
                                                                            {touched[fieldName] && errors[fieldName] && (
                                                                                <div className="text-red-600 text-sm leading-7">
                                                                                    {errors[fieldName]}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        ) : (
                                                            <div key={dropdown.id}>
                                                                <CustomSelect
                                                                    key={baseField}
                                                                    options={dropdown.options}
                                                                    divider={false}
                                                                    name={baseField}
                                                                    value={formik.values[baseField] || ""}
                                                                    onChange={(value) =>
                                                                        formik.setFieldValue(baseField, value)
                                                                    }
                                                                    onBlur={(baseField) => {
                                                                        if (baseField) {
                                                                            formik.setFieldTouched(baseField, true);
                                                                        }
                                                                    }}
                                                                    customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    }
                                                                    className="w-full !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                    innerOptionsClass="!bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                />
                                                                {touched[baseField] && errors[baseField] && (
                                                                    <div className="text-red-600 text-sm leading-7">
                                                                        {errors[baseField]}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <CustomLabel
                                            className="mt-[24px] mb-[20px] block"
                                            text="Propellant:"
                                        />
                                        <div className='flex flex-wrap items-center justify-start gap-[20px] mb-[50px] relative'>
                                            {
                                                checkboxList.map((checkboxLi) => {
                                                    return (
                                                        <>
                                                            <CustomCheckbox
                                                                key={checkboxLi.id}
                                                                id={checkboxLi.label}
                                                                name={checkboxLi.label}
                                                                value={formik.values[checkboxLi.label] || ""}
                                                                checked={formik.values.fuelType.includes(checkboxLi.label)}
                                                                onChange={() => handleCheckboxChange(checkboxLi.label)}
                                                                onBlur={handleBlur}
                                                                custom_label_for={checkboxLi.label}
                                                                inputClassName=""
                                                                labelClassName="!text-[15px] block"
                                                                custom_label_text={checkboxLi.label}
                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                            <div className='absolute bottom-[-35px] left-0'>
                                                {formik.touched.fuelType && formik.errors.fuelType && (
                                                    <div className="text-red-600 text-sm mt-2">
                                                        {formik.errors.fuelType}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <Button text="Click To Continue"
                                            type="submit"
                                            className="w-full lg:w-[385px] flex justify-center mt-[25px] !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[18px] !text-white h-[41px] hover:scale-110" />

                                        <div className="mt-[50px]">
                                            <h2 className="mb-[30px] text-2xl lg:text-[25px] font-medium text-[#000000] leading-[30px]">For your information:</h2>
                                            {InformationParagraph.map((paragraphic) => {
                                                return (
                                                    <p key={paragraphic.id} className="font-roboto font-normal text-black text-sm lg:text-[18px] leading-[32px] mb-[25px]">
                                                        {paragraphic.paragraph}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Tabs>
                    </div>

                    {activeTab === -1 && (
                        <div className='h-[340px]'>
                            <h2 className="text-2xl lg:text-[35px] font-medium text-[#000000] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pt-[30px] sm:pt-0">Choose a Section</h2>
                        </div>
                    )}
                </HeroCard>

                <Faq />
            </section>

            <Footer />
        </div>
    );
}

export default SectionSelection;