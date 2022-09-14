
import { Link, Box, Container } from "@mui/material";
import { linkStyle, } from '../../Styles/ArticleFooter/index'
import { ContainerStyle } from '../../Styles/Container/Container'
interface CustomBreadcrumbsProps {

  links: string[];
  text: string;
}

function CustomBreadcrumbs({ links, text }: CustomBreadcrumbsProps) {
  return (
    <>
      <Box sx={{ margin: { xs: "0 -20px", lg: "0 -10px" } }}>
        <Container sx={ContainerStyle} >

          <Box>
            <Box sx={{
              display: { xs: "block", sm: "block", md: "inline-block", lg: "inline-block" },
              color: "#006cb7",
            }}>
              <Box
                sx={{ display: { xs: "none", sm: "none", md: "none", lg: "inline-block" } }}
              >
                <Link
                  sx={linkStyle}

                  href="#"

                  underline="hover"
                  mb={1.5}

                  variant="subtitle1"
                >
                  {"KTH"}
                </Link>


                {links.map((link, index) => (
                  <Link
                    sx={{
                      linkStyle
                    }}
                    key={index}
                    href="#"

                    underline="hover"
                    mb={1.5}

                    variant="subtitle1"
                  >
                    <span className="linkColor">{" / " + link}</span>
                  </Link>
                ))}
              </Box>

            </Box>
            <Box sx={{
              float: { xs: "none", sm: "right", md: "right", lg: "right", },
              display: { xs: "block", sm: "block", md: "inline-block", lg: "inline-block" },
              // marginLeft:{xs:"10px",sm:"0",md:"0",lg:"0"},
            }}

            >
              <Link
                sx={linkStyle}

                href="#"

                underline="hover"
                mb={1.5}

                variant="subtitle1"
              >
                {text}
              </Link>

            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );


}
export default CustomBreadcrumbs