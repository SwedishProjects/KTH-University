import BusinessLink from './Components/BusinessLink/BusinessLink'
import  ArticleFooter from '../ArticleFooter/ArticleFooter';

import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';

const links=[
  "Business and Community"
]


const CoOperation = () => {
 

  return (
  <>
    <CustomBreadcrumbs links={links} text={"Denna sida på svenska"} />
      <BusinessLink />
    <ArticleFooter title={"nickyr@kth.se"}
     pageName={"Business and Community"} time={"Mar 27, 2022"} />
  </>
    );
  };
  
  export default CoOperation;