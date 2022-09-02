import{ Box,
  
    Checkbox,
    Grid,
    Typography,}  from '@mui/material';
import {ContactName} from "../../../../Styles/ContactKth";
import TextKth from '../TextKth/TextKth';
import ContactBoldText from '../ContactBoldText/ContactBoldText';
import ContactLink from '../ContactLink/ContactLink';
function ContactText(){
    return (
        <>

<Typography sx={ContactName} variant="h6" component="div">
Contact KTH
          </Typography>
          <TextKth text="Vat nr: SE202100305401 "/>
          <TextKth text="Organization number (Corporate Identification Number): 202100-3054"/>
          <TextKth text="Visiting Address: Brinellvägen 8, Stockholm"/>
          <TextKth text="Postal Address: Kungliga Tekniska Högskolan, SE-100 44 STOCKHOLM"/>
          <TextKth text="Phone: +46 8 790 60 00 Fax: +46 8 790 65 00"/>
          <TextKth text="Emergency number: +46 8 790 77 00"/>

          {/* //////// */}
          <ContactBoldText text="Requests for disclosure of public documents" />
          <ContactLink links="Registrar's Office" />


          {/* //////// */}
          <ContactBoldText text="Data Protection Officer" />
         <Box sx={{display:"flex" , justifyContent:"flex-start"}}>
         <Box sx={{marginTop:"-3px"}}> <TextKth text="E-mail:"/></Box>

<ContactLink links="dataskyddsombud@kth.se" />
         </Box>
{/* //////////////// */}

<ContactBoldText text="KTH Entré" />
      
         <TextKth text="KTH Entré is central service and information desk 
         located on Drottning Kristinas väg 4. At KTH Entré you can as a 
         visitor or student get help with general questions about the KTH, 
         get help to find premises and 
         people on campus and help with IT-Support related issues."/>
        
<ContactLink links="Contact KTH Entré" />
         {/* /////////////// */}
         <ContactBoldText text="Questions about studying at KTH" />
      
<ContactLink links="Master's programmes" />
<ContactLink links="Bachelor's programme" />
<ContactLink links="Exchange studies" />
<ContactLink links="Doctoral studies" />



{/* //////////////// */}

<ContactBoldText text="Verify degree information" />
      
         <TextKth text="For a verification of a Degree Certificate contact the Degree Administration Office by phone number +46 8 790 70 09 or use the below link:"/>
        
<ContactLink links="Verify degree information (student.ladok.se)" />

         {/* ////////////links ////////// */}
          <TextKth text="Phone: + 46 8 790 87 52"/>
           {/* ////////1 */}
           <ContactBoldText text="Collaboration with KTH" />
          <ContactLink links="Business Liaison" />
           {/* //////// 2*/}
           <ContactBoldText text="IT-support" />
          <ContactLink links="it-support@kth.se" />
           {/* //////// 3*/}
           <ContactBoldText text="Press and media" />
          <ContactLink links="Press contacts" />
           {/* ////////4 */}
           <ContactBoldText text="General questions about KTH" />
          <ContactLink links="info@kth.se" />






          
        </>
    )
}

export default ContactText;