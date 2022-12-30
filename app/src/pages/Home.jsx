import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usebody_flexCb, useNavbarCb, useDiv35Cb, useFlex20Cb, useDiv36Cb, useDiv38Cb, useDiv39Cb, useDiv40Cb, useDiv41Cb, useFlex19Cb, useDiv42Cb, useDiv43Cb, useLanding_page_itemCb, useleft_item_landingCb, useleft_heading_textCb, useFlex32Cb, useparagraph_texCb, usecall_cv_flexCb, usebook_callCb, usecv_buttonCb, usecvCb, uselogo_arrowCb, useheading_flexCb, usegriendient_textCb, usesimpleheading_textCb, useright_itemCb, uselogo_section_flexCb, useFlex37Cb, useServiceCb, usesection_heading_textCb, useFlex43Cb, usebox1_flexCb, useDiv65Cb, useDiv66Cb, useDiv67Cb, useDiv68Cb, useFlex44Cb, useDiv69Cb, useDiv70Cb, useDiv71Cb, usebox2_flexCb, useDiv75Cb, useFlex45Cb, useDiv72Cb, useDiv73Cb, useDiv74Cb, useDiv76Cb, useDiv77Cb, useDiv78Cb, usebox3_flexCb, useDiv82Cb, useDiv83Cb, useDiv84Cb, useDiv85Cb, useFlex47Cb, useDiv79Cb, useDiv80Cb, useDiv81Cb, useProject_sectionCb, useproject_button_textCb, useFlex64Cb, useFlex61Cb, useFlex60Cb, useFlex63Cb, useFlex62Cb, useFlex59Cb, useFlex58Cb, useFlex52Cb, useFlex57Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useTextBox21Cb, useImage3Cb, useparagraph_textCb, usebook_calCb, useTextBox29Cb, useImage5Cb, usegrident_textCb, usesimple_textCb, useImage4Cb, useTruted_ByCb, useImage6Cb, useImage7Cb, useImage8Cb, useImage9Cb, useTextBox31Cb, useTextBox32Cb, useImage10Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useImage11Cb, useImage12Cb, useTextBox46Cb, useTextBox47Cb, useTextBox43Cb, useTextBox44Cb, useTextBox45Cb, useTextBox49Cb, useTextBox50Cb, useButton5Cb, useTextBox59Cb, useTextBox60Cb, useImage18Cb, useImage17Cb, useTextBox58Cb, useImage20Cb, useTextBox62Cb, useTextBox63Cb, useTextBox61Cb, useImage19Cb, useTextBox56Cb, useTextBox57Cb, useImage16Cb, useImage15Cb, useTextBox55Cb, useImage13Cb, useTextBox53Cb, useTextBox54Cb, useTextBox52Cb, useImage14Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const body_flexProps = useStore((state)=>state["Home"]["body_flex"]);
const body_flexIoProps = useIoStore((state)=>state["Home"]["body_flex"]);
const body_flexCb = usebody_flexCb()
const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Landing_page_itemProps = useStore((state)=>state["Home"]["Landing_page_item"]);
const Landing_page_itemIoProps = useIoStore((state)=>state["Home"]["Landing_page_item"]);
const Landing_page_itemCb = useLanding_page_itemCb()
const left_item_landingProps = useStore((state)=>state["Home"]["left_item_landing"]);
const left_item_landingIoProps = useIoStore((state)=>state["Home"]["left_item_landing"]);
const left_item_landingCb = useleft_item_landingCb()
const left_heading_textProps = useStore((state)=>state["Home"]["left_heading_text"]);
const left_heading_textIoProps = useIoStore((state)=>state["Home"]["left_heading_text"]);
const left_heading_textCb = useleft_heading_textCb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const paragraph_texProps = useStore((state)=>state["Home"]["paragraph_tex"]);
const paragraph_texIoProps = useIoStore((state)=>state["Home"]["paragraph_tex"]);
const paragraph_texCb = useparagraph_texCb()
const call_cv_flexProps = useStore((state)=>state["Home"]["call_cv_flex"]);
const call_cv_flexIoProps = useIoStore((state)=>state["Home"]["call_cv_flex"]);
const call_cv_flexCb = usecall_cv_flexCb()
const book_callProps = useStore((state)=>state["Home"]["book_call"]);
const book_callIoProps = useIoStore((state)=>state["Home"]["book_call"]);
const book_callCb = usebook_callCb()
const cv_buttonProps = useStore((state)=>state["Home"]["cv_button"]);
const cv_buttonIoProps = useIoStore((state)=>state["Home"]["cv_button"]);
const cv_buttonCb = usecv_buttonCb()
const cvProps = useStore((state)=>state["Home"]["cv"]);
const cvIoProps = useIoStore((state)=>state["Home"]["cv"]);
const cvCb = usecvCb()
const logo_arrowProps = useStore((state)=>state["Home"]["logo_arrow"]);
const logo_arrowIoProps = useIoStore((state)=>state["Home"]["logo_arrow"]);
const logo_arrowCb = uselogo_arrowCb()
const heading_flexProps = useStore((state)=>state["Home"]["heading_flex"]);
const heading_flexIoProps = useIoStore((state)=>state["Home"]["heading_flex"]);
const heading_flexCb = useheading_flexCb()
const griendient_textProps = useStore((state)=>state["Home"]["griendient_text"]);
const griendient_textIoProps = useIoStore((state)=>state["Home"]["griendient_text"]);
const griendient_textCb = usegriendient_textCb()
const simpleheading_textProps = useStore((state)=>state["Home"]["simpleheading_text"]);
const simpleheading_textIoProps = useIoStore((state)=>state["Home"]["simpleheading_text"]);
const simpleheading_textCb = usesimpleheading_textCb()
const right_itemProps = useStore((state)=>state["Home"]["right_item"]);
const right_itemIoProps = useIoStore((state)=>state["Home"]["right_item"]);
const right_itemCb = useright_itemCb()
const logo_section_flexProps = useStore((state)=>state["Home"]["logo_section_flex"]);
const logo_section_flexIoProps = useIoStore((state)=>state["Home"]["logo_section_flex"]);
const logo_section_flexCb = uselogo_section_flexCb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const ServiceProps = useStore((state)=>state["Home"]["Service"]);
const ServiceIoProps = useIoStore((state)=>state["Home"]["Service"]);
const ServiceCb = useServiceCb()
const section_heading_textProps = useStore((state)=>state["Home"]["section_heading_text"]);
const section_heading_textIoProps = useIoStore((state)=>state["Home"]["section_heading_text"]);
const section_heading_textCb = usesection_heading_textCb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const box1_flexProps = useStore((state)=>state["Home"]["box1_flex"]);
const box1_flexIoProps = useIoStore((state)=>state["Home"]["box1_flex"]);
const box1_flexCb = usebox1_flexCb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Div66Props = useStore((state)=>state["Home"]["Div66"]);
const Div66IoProps = useIoStore((state)=>state["Home"]["Div66"]);
const Div66Cb = useDiv66Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Div68Props = useStore((state)=>state["Home"]["Div68"]);
const Div68IoProps = useIoStore((state)=>state["Home"]["Div68"]);
const Div68Cb = useDiv68Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Div69Props = useStore((state)=>state["Home"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div70Props = useStore((state)=>state["Home"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["Home"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Div71Props = useStore((state)=>state["Home"]["Div71"]);
const Div71IoProps = useIoStore((state)=>state["Home"]["Div71"]);
const Div71Cb = useDiv71Cb()
const box2_flexProps = useStore((state)=>state["Home"]["box2_flex"]);
const box2_flexIoProps = useIoStore((state)=>state["Home"]["box2_flex"]);
const box2_flexCb = usebox2_flexCb()
const Div75Props = useStore((state)=>state["Home"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Div72Props = useStore((state)=>state["Home"]["Div72"]);
const Div72IoProps = useIoStore((state)=>state["Home"]["Div72"]);
const Div72Cb = useDiv72Cb()
const Div73Props = useStore((state)=>state["Home"]["Div73"]);
const Div73IoProps = useIoStore((state)=>state["Home"]["Div73"]);
const Div73Cb = useDiv73Cb()
const Div74Props = useStore((state)=>state["Home"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Div77Props = useStore((state)=>state["Home"]["Div77"]);
const Div77IoProps = useIoStore((state)=>state["Home"]["Div77"]);
const Div77Cb = useDiv77Cb()
const Div78Props = useStore((state)=>state["Home"]["Div78"]);
const Div78IoProps = useIoStore((state)=>state["Home"]["Div78"]);
const Div78Cb = useDiv78Cb()
const box3_flexProps = useStore((state)=>state["Home"]["box3_flex"]);
const box3_flexIoProps = useIoStore((state)=>state["Home"]["box3_flex"]);
const box3_flexCb = usebox3_flexCb()
const Div82Props = useStore((state)=>state["Home"]["Div82"]);
const Div82IoProps = useIoStore((state)=>state["Home"]["Div82"]);
const Div82Cb = useDiv82Cb()
const Div83Props = useStore((state)=>state["Home"]["Div83"]);
const Div83IoProps = useIoStore((state)=>state["Home"]["Div83"]);
const Div83Cb = useDiv83Cb()
const Div84Props = useStore((state)=>state["Home"]["Div84"]);
const Div84IoProps = useIoStore((state)=>state["Home"]["Div84"]);
const Div84Cb = useDiv84Cb()
const Div85Props = useStore((state)=>state["Home"]["Div85"]);
const Div85IoProps = useIoStore((state)=>state["Home"]["Div85"]);
const Div85Cb = useDiv85Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Div79Props = useStore((state)=>state["Home"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["Home"]["Div79"]);
const Div79Cb = useDiv79Cb()
const Div80Props = useStore((state)=>state["Home"]["Div80"]);
const Div80IoProps = useIoStore((state)=>state["Home"]["Div80"]);
const Div80Cb = useDiv80Cb()
const Div81Props = useStore((state)=>state["Home"]["Div81"]);
const Div81IoProps = useIoStore((state)=>state["Home"]["Div81"]);
const Div81Cb = useDiv81Cb()
const Project_sectionProps = useStore((state)=>state["Home"]["Project_section"]);
const Project_sectionIoProps = useIoStore((state)=>state["Home"]["Project_section"]);
const Project_sectionCb = useProject_sectionCb()
const project_button_textProps = useStore((state)=>state["Home"]["project_button_text"]);
const project_button_textIoProps = useIoStore((state)=>state["Home"]["project_button_text"]);
const project_button_textCb = useproject_button_textCb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const paragraph_textProps = useStore((state)=>state["Home"]["paragraph_text"]);
const paragraph_textIoProps = useIoStore((state)=>state["Home"]["paragraph_text"]);
const paragraph_textCb = useparagraph_textCb()
const book_calProps = useStore((state)=>state["Home"]["book_cal"]);
const book_calIoProps = useIoStore((state)=>state["Home"]["book_cal"]);
const book_calCb = usebook_calCb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const grident_textProps = useStore((state)=>state["Home"]["grident_text"]);
const grident_textIoProps = useIoStore((state)=>state["Home"]["grident_text"]);
const grident_textCb = usegrident_textCb()
const simple_textProps = useStore((state)=>state["Home"]["simple_text"]);
const simple_textIoProps = useIoStore((state)=>state["Home"]["simple_text"]);
const simple_textCb = usesimple_textCb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Truted_ByProps = useStore((state)=>state["Home"]["Truted_By"]);
const Truted_ByIoProps = useIoStore((state)=>state["Home"]["Truted_By"]);
const Truted_ByCb = useTruted_ByCb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()

  return (<>
  <Flex className="p-Home body_flex bpt" {...body_flexProps} {...body_flexCb} {...body_flexIoProps}>
<Flex className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Div>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Div className="p-Home Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Div>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Div>
<Div className="p-Home Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Div>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Div>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Div>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Landing_page_item bpt" {...Landing_page_itemProps} {...Landing_page_itemCb} {...Landing_page_itemIoProps}>
<Flex className="p-Home left_item_landing bpt" {...left_item_landingProps} {...left_item_landingCb} {...left_item_landingIoProps}>
<Div className="p-Home left_heading_text bpt" {...left_heading_textProps} {...left_heading_textCb} {...left_heading_textIoProps}>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Flex className="p-Home heading_flex bpt" {...heading_flexProps} {...heading_flexCb} {...heading_flexIoProps}>
<Div className="p-Home griendient_text bpt" {...griendient_textProps} {...griendient_textCb} {...griendient_textIoProps}>
<TextBox className="p-Home grident_text bpt" {...grident_textProps} {...grident_textCb} {...grident_textIoProps}/>
</Div>
<Div className="p-Home simpleheading_text bpt" {...simpleheading_textProps} {...simpleheading_textCb} {...simpleheading_textIoProps}>
<TextBox className="p-Home simple_text bpt" {...simple_textProps} {...simple_textCb} {...simple_textIoProps}/>
</Div>
</Flex>
<Div className="p-Home paragraph_tex bpt" {...paragraph_texProps} {...paragraph_texCb} {...paragraph_texIoProps}>
<TextBox className="p-Home paragraph_text bpt" {...paragraph_textProps} {...paragraph_textCb} {...paragraph_textIoProps}/>
</Div>
<Flex className="p-Home call_cv_flex bpt" {...call_cv_flexProps} {...call_cv_flexCb} {...call_cv_flexIoProps}>
<Div className="p-Home book_call bpt" {...book_callProps} {...book_callCb} {...book_callIoProps}>
<Button className="p-Home book_cal bpt" {...book_calProps} {...book_calCb} {...book_calIoProps}/>
</Div>
<Flex className="p-Home cv_button bpt" {...cv_buttonProps} {...cv_buttonCb} {...cv_buttonIoProps}>
<Div className="p-Home cv bpt" {...cvProps} {...cvCb} {...cvIoProps}>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Div>
<Div className="p-Home logo_arrow bpt" {...logo_arrowProps} {...logo_arrowCb} {...logo_arrowIoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Div>
</Flex>
<Div className="p-Home right_item bpt" {...right_itemProps} {...right_itemCb} {...right_itemIoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Div>
</Flex>
<Flex className="p-Home logo_section_flex bpt" {...logo_section_flexProps} {...logo_section_flexCb} {...logo_section_flexIoProps}>
<TextBox className="p-Home Truted_By bpt" {...Truted_ByProps} {...Truted_ByCb} {...Truted_ByIoProps}/>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Service bpt" {...ServiceProps} {...ServiceCb} {...ServiceIoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex className="p-Home section_heading_text bpt" {...section_heading_textProps} {...section_heading_textCb} {...section_heading_textIoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home box1_flex bpt" {...box1_flexProps} {...box1_flexCb} {...box1_flexIoProps}>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Div>
<Div className="p-Home Div66 bpt" {...Div66Props} {...Div66Cb} {...Div66IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Div>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Div>
<Div className="p-Home Div68 bpt" {...Div68Props} {...Div68Cb} {...Div68IoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-Home Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div>
<Div className="p-Home Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Div>
<Div className="p-Home Div71 bpt" {...Div71Props} {...Div71Cb} {...Div71IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Flex className="p-Home box2_flex bpt" {...box2_flexProps} {...box2_flexCb} {...box2_flexIoProps}>
<Div className="p-Home Div78 bpt" {...Div78Props} {...Div78Cb} {...Div78IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Div>
<Div className="p-Home Div77 bpt" {...Div77Props} {...Div77Cb} {...Div77IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Div>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div>
<Div className="p-Home Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Div className="p-Home Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
<Div className="p-Home Div73 bpt" {...Div73Props} {...Div73Cb} {...Div73IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
<Div className="p-Home Div72 bpt" {...Div72Props} {...Div72Cb} {...Div72IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Flex className="p-Home box3_flex bpt" {...box3_flexProps} {...box3_flexCb} {...box3_flexIoProps}>
<Div className="p-Home Div82 bpt" {...Div82Props} {...Div82Cb} {...Div82IoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Div>
<Div className="p-Home Div83 bpt" {...Div83Props} {...Div83Cb} {...Div83IoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Div>
<Div className="p-Home Div84 bpt" {...Div84Props} {...Div84Cb} {...Div84IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Div>
<Div className="p-Home Div85 bpt" {...Div85Props} {...Div85Cb} {...Div85IoProps}>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Div className="p-Home Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Div>
<Div className="p-Home Div80 bpt" {...Div80Props} {...Div80Cb} {...Div80IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Div>
<Div className="p-Home Div81 bpt" {...Div81Props} {...Div81Cb} {...Div81IoProps}>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Project_section bpt" {...Project_sectionProps} {...Project_sectionCb} {...Project_sectionIoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<Flex className="p-Home project_button_text bpt" {...project_button_textProps} {...project_button_textCb} {...project_button_textIoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
