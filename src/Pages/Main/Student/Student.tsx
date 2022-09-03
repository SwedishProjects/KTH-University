import { Grid, Container, Divider, Typography, Box } from '@mui/material';
import images from 'src/Importer/Importer';
import { CalendarHeading } from '../../../Styles/Calendar';

import styled from 'styled-components';

const MyButton = styled.button`
color: #fff;
background-color: #007fae;
border-color: transparent;
padding: 14px 33px;
border-radius: 6px;
font-weight: 600;
font-size: 1rem;
`

const MyPadding = styled.div`
padding:30px;
`
const newsList = [
    {
        'title': 'Zoom client',
        'date': '1 Sep 2022'
    }, {
        'title': 'Anders Söderholm appointed President of KTH',
        'date': '19 Aug 2022'
    }, {
        'title': 'Ask your questions to Anders Söderholm, proposed as the next President of KTH',
        'date': '3 May 2022'
    }, {
        'title': 'Anders Söderholm proposed as new President of KTH',
        'date': '20 Apr 2022'
    }, {
        'title': 'Apply to International Internship Programme in informatics at NII in Tokyo',
        'date': '20 Apr 2022'
    }, {
        'title': 'Mentor provides valuable insight into future career',
        'date': '19 Apr 2022'
    }, {
        'title': 'Share your degree certificate digitally via a new function',
        'date': '13 Apr 2022'
    }
    , {
        'title': 'Give feedback on hybrid education',
        'date': '13 Apr 2022'
    }
    , {
        'title': 'More news',
        'date': ''
    }
]

const calendarList = [
    {
        'link': 'Lunch lecture with Effective Altruism KTH - STUDENT EVENT',
        'head': 'Sustainability',
        'date': 'Tuesday 2022-09-06, 12:00',
        'location': 'KTH Campus, V1 (Teknikringen)',
        'lecturer': '',
        'image': images['dates/date.png']
    },
    {
        'link': 'Lunch lecture with Effective Altruism KTH - STUDENT EVENT',
        'head': 'Sustainability',
        'date': 'Tuesday 2022-09-06, 12:00',
        'location': 'KTH Campus, V1 (Teknikringen)',
        'lecturer': '',
        'image': images['dates/date.png']
    },
    {
        'link': 'Lunch lecture with Effective Altruism KTH - STUDENT EVENT',
        'head': 'Sustainability',
        'date': 'Tuesday 2022-09-06, 12:00',
        'location': 'KTH Campus, V1 (Teknikringen)',
        'lecturer': '',
        'image': images['dates/date.png']
    },
    {
        'link': 'Lunch lecture with Effective Altruism KTH - STUDENT EVENT',
        'head': 'Sustainability',
        'date': 'Tuesday 2022-09-06, 12:00',
        'location': 'KTH Campus, V1 (Teknikringen)',
        'lecturer': '',
        'image': images['dates/date.png']
    },
    {
        'link': 'Lunch lecture with Effective Altruism KTH - STUDENT EVENT',
        'head': 'Sustainability',
        'date': 'Tuesday 2022-09-06, 12:00',
        'location': 'KTH Campus, V1 (Teknikringen)',
        'lecturer': '',
        'image': images['dates/date.png']
    }
]

function Student() {
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    maxWidth: "100%",
                    padding: "15px"
                }}
                style={{
                    backgroundColor: "#fff"
                }}
            >
                <Box

                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} lg={8}>
                            <Typography
                                variant="body2"
                                mb={2.5}
                                sx={CalendarHeading}>
                                Calendar
                            </Typography>
                            <Divider color="#fff" sx={{
                                margin: "15px 0", paddingBottom: "3px", marginBottom: "25px",
                            }} />

                            <div className="myBorder">
                                <Grid container spacing={0}>
                                    <Grid item xs={12} md={6}>
                                        <Grid item xs direction="column" spacing={2}>
                                            <div style={{
                                                padding: "30px 0 30px 30px"
                                            }}>

                                                <Grid item xs>
                                                    <h2>Newly admitted student? </h2>
                                                    <p>We have gathered all the information you need when the semester starts.</p>
                                                    <a href="#">New student at KTH</a>
                                                    <br />
                                                    <a href="#">Register for your courses before 5 September</a>
                                                </Grid>
                                            </div>

                                        </Grid>
                                    </Grid>


                                    <Grid item xs={12} md={6}>
                                        <img className="img-fluid" alt="complex" src={images['KTH VIC studenter framför skärm.jpg']} />
                                    </Grid>
                                </Grid>
                            </div>
                            <Grid container spacing={4} mt={4}>
                                <Grid item xs={12} md={6}>
                                    <div className="myBorder">
                                        <img src={images['Föreläsare.jpg']} alt="" />

                                        <MyPadding>
                                            <Typography variant='h4'>
                                                Nominate a candidate for Deputy President
                                            </Typography>
                                            <p>
                                                You can now nominate one or more candidates that you find suitable as Deputy President of KTH. Submit your nomination by 20 September.
                                            </p>
                                            <a href="https://intra.kth.se/en/styrning/rekrytering/nominera-en-kandidat-till-prorektorsuppdraget-1.1092676">Nominate a candidate for the position of Deputy President (KTH Intranet)</a>
                                        </MyPadding>
                                    </div >
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <div className="myBorder">
                                        <img src={images['Two persons with laptop s.jpg']} alt="" />

                                        <MyPadding>
                                            <Typography variant='h4'>

                                                Learn how to use sources correctly

                                            </Typography>
                                            <p>
                                                Plagiarism can be caused by a lack of knowledge about how to use and cite sources in one’s own work. During this digital seminar, you will learn about plagiarism and how to avoid it.
                                            </p>
                                            <a href="https://intra.kth.se/en/styrning/rekrytering/nominera-en-kandidat-till-prorektorsuppdraget-1.1092676">
                                                Join the digital seminar 27 September 12.15–13.00
                                            </a>
                                        </MyPadding>
                                    </div >
                                </Grid>

                            </Grid>
                            <Grid container spacing={4} mt={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography
                                        variant="body2"
                                        mb={2.5}
                                        sx={CalendarHeading}>
                                        MORE NEWS
                                    </Typography>
                                    <Divider color="#fff" sx={{
                                        margin: "15px 0", paddingBottom: "3px", marginBottom: "25px",
                                    }} />

                                    {
                                        newsList.map((news: { title: string, date: string }) => {
                                            return (
                                                <>

                                                    <a href="#" >
                                                        {news.title}
                                                    </a>
                                                    <p>{news.date}</p>
                                                    <Divider color="#fff" sx={{
                                                        margin: "15px 0", paddingBottom: "3px", marginBottom: "25px",
                                                    }} />
                                                </>
                                            )
                                        })
                                    }
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography
                                        variant="body2"
                                        mb={2.5}
                                        sx={CalendarHeading}>
                                        CALENDAR
                                    </Typography>

                                    <Divider color="#fff" sx={{
                                        margin: "15px 0", paddingBottom: "3px", marginBottom: "25px",
                                    }} />
                                    {
                                        calendarList.map((calendar: {
                                            link: string,
                                            head: string,
                                            date: string,
                                            location: string,
                                            lecturer?: string,
                                            image: any
                                        }) => {
                                            return (
                                                <>
                                                    <a href="#">
                                                        {calendar.link}
                                                    </a>

                                                    <Box display="flex" flexDirection="row" alignItems="center">
                                                        <Box>
                                                            <img src={calendar.image} alt="" />
                                                        </Box>
                                                        <Box flexDirection="column" ml={3} lineHeight={1}>
                                                            <h4>
                                                                {calendar.head}
                                                            </h4>
                                                            <p>
                                                                {calendar.date}
                                                            </p>

                                                            <p>
                                                                <b>Location:</b><span>{calendar.location}</span>
                                                            </p>


                                                        </Box>
                                                    </Box>
                                                    <Divider color="#fff" sx={{
                                                        margin: "15px 0", paddingBottom: "3px", marginBottom: "25px",
                                                    }} />
                                                </>
                                            )
                                        })
                                    }
                                    <a href="#">More events</a>



                                </Grid>
                            </Grid>




                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <div id="secondaryBlock">
                                <div className="p-20 blueBox">
                                    <p>
                                        <strong>25 August–5 September</strong>
                                        <br />
                                        <a className="a-in-rightBox block link" data-cid="1.1174442" href="/en/student/studier/kurs/kursregistrering-1.317058" lang="en-GB">
                                            Course registration study period 1
                                        </a>
                                    </p>
                                    <p>
                                        <strong>20 September–4 October</strong>
                                        <br />
                                        <a className="a-in-rightBox block link" data-cid="1.1172616" href="/en/student/studier/kurs/tentamen/examination-1.324344" lang="en-GB">
                                            Register for exam period 1</a>
                                    </p>
                                    <p>
                                        <strong>21 November–5 December</strong>
                                        <br />
                                        <a className="a-in-rightBox block link" data-cid="1.1182647" href="/en/student/studier/kurs/tentamen/examination-1.324344" lang="en-GB">Register for re-exam period 1</a>
                                    </p>
                                </div>
                                <div className='p-20 bg-grey margin-top'>
                                    <div className="teaserBody">
                                        <h2 className="teaserHeading">
                                            Find programme or course information
                                        </h2>
                                        <div className="lead">
                                            <p>Find programme syllabus, course syllabus and course memo.</p>
                                            <p>
                                                <MyButton>
                                                    Search course
                                                </MyButton>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-20 bg-grey margin-top'>
                                    <div className="teaserBody">

                                        <h2 className="teaserHeading">
                                            Contact KTH
                                        </h2>
                                        <div className="lead">
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186912"

                                                    href="/en/student/kontakt/kontaktuppgifter/contact-programme-1.1171897"
                                                    lang="en-GB">
                                                    Contact programme</a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186913"

                                                    href="/en/student/kontakt/kontaktuppgifter/kontakta-kurs-1.1171899"
                                                    lang="en-GB">
                                                    Contact course</a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186914"

                                                    href="/en/student/kontakt/kontaktuppgifter/exchange-students-1.980883"
                                                    lang="en-GB">
                                                    Contact persons for exchange students</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='p-20 myBorder margin-top'>
                                    <div className="teaserBody">

                                        <h2 className="teaserHeading">
                                            Shortcuts
                                        </h2>
                                        <div className="lead">
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186912"

                                                    href="/en/student/kontakt/kontaktuppgifter/contact-programme-1.1171897"
                                                    lang="en-GB">
                                                    New at KTH</a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186913"

                                                    href="/en/student/kontakt/kontaktuppgifter/kontakta-kurs-1.1171899"
                                                    lang="en-GB">
                                                    Course and examination</a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186914"

                                                    href="/en/student/kontakt/kontaktuppgifter/exchange-students-1.980883"
                                                    lang="en-GB">
                                                    Administrate your studies</a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186914"

                                                    href="/en/student/kontakt/kontaktuppgifter/exchange-students-1.980883"
                                                    lang="en-GB">
                                                    Rights and responsibilities</a>
                                            </p>

                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186914"

                                                    href="/en/student/kontakt/kontaktuppgifter/exchange-students-1.980883"
                                                    lang="en-GB">
                                                    Selection during studies

                                                </a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186914"

                                                    href="/en/student/kontakt/kontaktuppgifter/exchange-students-1.980883"
                                                    lang="en-GB">
                                                    Student health services

                                                </a>
                                            </p>
                                            <p>
                                                <a className="block link"
                                                    data-cid="1.1186914"

                                                    href="/en/student/kontakt/kontaktuppgifter/exchange-students-1.980883"
                                                    lang="en-GB">
                                                    Study with disabilities


                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>



                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Student;
