import StudiesList from './Components/StudiesList/StudiesList'
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';

const    links = [
 "Study at KTH",
 
   ];
const Studies = () => {
    return (
    <>
    <CustomBreadcrumbs   links={links} text={" "} />
    <StudiesList />
    <ArticleFooter title={"KTH International Student Recruitment"}
     pageName={"Study at KTH"} time={"Jun 28, 2022"} />

    </>
    );
  };
  
  export default Studies;