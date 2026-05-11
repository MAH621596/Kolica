import * as Yup from "yup";
import { useState } from 'react';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
    Tabs,
    Navbar,
    Footer,
    Button,
    HeroCard,
    InfoListCard,
    FormFieldsCard,
} from "@/components";

import {
    PostNewAdData,
    sectionTabsMenu,
    basicInfoIndividual,
    contactInfoIndividual,
} from '@/helper/data';
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

import type { FormValues } from "@/components/types";

const Individual = () => {
    const navigate = useNavigate();
    const loggedIn = useSelector(
        (state: RootState) => state.auth.loggedIn
    );
    const [activeMainTab, setActiveMainTab] = useState<number>(3);

    // FIXED VALIDATION (must match initialValues keys)
    const validationSchema = Yup.object().shape({
        Name: Yup.string().required("Name is Required."),
        LastName: Yup.string().required("Last Name is Required."),
        Country: Yup.string().required("Country is Required."),
        PostOffice: Yup.string().required("Post Office is Required."),
        Street: Yup.string().required("Street is Required."),
        HouseNo: Yup.string().required("House Number is Required."),
        SellerName: Yup.string().required("Seller Name is Required."),
        Phone: Yup.string().required("Phone is Required."),
        Details: Yup.string().required("Details Required."),
        Email: Yup.string().required("Email is Required."),
    });

    // FIXED INITIAL VALUES (MAIN ISSUE FIXED)
    const formik = useFormik<FormValues>({
        initialValues: {
            Name: "",
            LastName: "",
            Country: "",
            PostOffice: "",
            Street: "",
            HouseNo: "",
            SellerName: "",
            Phone: "",
            Details: "",
            Email: "",
        },

        validationSchema,

        onSubmit: (values, { resetForm }) => {
            console.log("onsubmit values", values);
            resetForm();
            navigate("/");
        },
    });

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
            <Navbar logStatus={loggedIn} />

            <Tabs
                className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] p-0 mb-[50px] hidden md:block"
                tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
                tabs_list={sectionTabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                variant="route"
                activeTab={activeMainTab}
                onClick={(id) => setActiveMainTab(id)} />

            <section className="md:px-4 lg:px-0">
                <HeroCard parentClass="!bg-[#F9FAFB] !py-[25px] !px-[30px]">
                    <div className='flex flex-col lg:flex-row items-start gap-[25px]'>

                        <InfoListCard
                            title="Why register as an individual?"
                            data={PostNewAdData} />

                        <div className="w-full lg:w-[65%] bg-white rounded-[20px] px-[20px] py-[40px] text-left">
                            <form noValidate onSubmit={formik.handleSubmit}>

                                <FormFieldsCard
                                    title="Basic information (*)"
                                    data={basicInfoIndividual}
                                    formik={formik} />

                                <FormFieldsCard
                                    title="Contact information for publication with the advertisement"
                                    data={contactInfoIndividual}
                                    formik={formik} />

                                <Button pre={true} type="submit" text="Merchant registration"
                                    className="mt-[30px] w-full flex justify-center 
                                    !bg-[#B1222C] border-[#B1222C] 
                                    font-semibold text-xs lg:text-[18px] leading-[12px] !text-white h-[41px] 
                                    hover:scale-90"
                                />

                            </form>
                        </div>
                    </div>
                </HeroCard>
            </section>

            <Footer />
        </div>
    );
}

export default Individual;