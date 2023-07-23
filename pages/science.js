import Head from 'next/head';
import Header3 from '../components/layouts/Header3';
import HeroBannerFive from '../components/banners/HeroBannerFive';
import DividerTwo from '../components/DividerTwo';
import HomeTwoNumber from '../components/number/HomeTwoNumber';
import HomeFiveRoadMap from '../components/roadmap/HomeFiveRoadMap';
import TeamFive from '../components/team/TeamFive';
import ChoseUs5 from '../components/choseus/ChoseUs5';
import HomeFiveAbout from '../components/about/HomeFiveAbout';
import Footer2 from '../components/layouts/Footer2';
import HomeFiveCollection from '../components/collection/HoemFiveCollection';
import FaqThree from '../components/faq/FaqThree';
import HomeFiveCta from '../components/cta/HomeFiveCta';

import ScienceAboutOne from '../components/science/ScienceAboutOne';
import ScienceAboutTwo from '../components/science/ScienceAboutTwo';
import ScienceAboutThree from '../components/science/ScienceAboutThree';
import ScienceAboutFour from '../components/science/ScienceAboutFour';
import ScienceAboutFive from '../components/science/ScienceAboutFive';
import ScienceAboutSix from '../components/science/ScienceAboutSix';
import ScienceTeamFour from '../components/science/ScienceTeamFour';
import ScienceFarmTwo from '../components/science/ScienceFarmTwo';
import ScienceAboutSeven from '../components/science/ScienceAboutSeven';
import ScienceAboutEight from '../components/science/ScienceAboutEight';
import ScienceAboutNine from '../components/science/ScienceAboutNine';
import ScienceCertificates from '../components/science/ScienceCertificates';
export default function NerkoTemplate() {
  return (    
        <div className="wrap uk-overflow-hidden">     
            <Head>
				<title>Blue Scorpion Project</title>
			</Head> 
			<Header3/>
			<ScienceAboutOne/>	
            <DividerTwo/>
            <ScienceAboutTwo/>
            <DividerTwo/>
            <ScienceAboutThree/>
            <DividerTwo/>
            <ScienceAboutFour/>
            <DividerTwo/>
            <ScienceAboutFive/>
            <DividerTwo/>
            <ScienceAboutSix/>
            <DividerTwo/>
            <ScienceTeamFour/>
            <DividerTwo/>
            <ScienceFarmTwo/>
            <ScienceAboutSeven/>
            <DividerTwo/>
            <ScienceAboutEight/>
            <DividerTwo/>
            <ScienceAboutNine/>
            <ScienceCertificates/>
            <DividerTwo/>	
			<Footer2/>
		</div> 
        
  	);
}
