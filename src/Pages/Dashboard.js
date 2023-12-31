import { useEffect, useState } from "react";
import { useUserContext } from "../Components/UserContext";
import {
  Grid,
  Box,
  Typography,
  ThemeProvider,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { theme } from "../Assets/Styles/Theme";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function AdminDashboard() {
  const { currUser } = useUserContext();
  const [accessToken, setAccessToken] = useState(null);
  const [displayMode, setDisplayMode] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (currUser) {
      const localAccess = currUser.accessToken;
      setAccessToken(localAccess);
    }
  }, [currUser]);

  //differentiating users
  useEffect(() => {
    if (currUser) {
      const userType = currUser.userRoleId;
      setDisplayMode(userType);
    }
  }, [currUser]);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        {displayMode === 1 ? (
          <Box
            sx={{
              backgroundColor: "#F3F1FF",
              width: "100vw",
              minHeight: "110vh",
            }}
          >
            <Grid
              container
              sx={{
                minHeight: "92vh",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ mt: "3vh" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                >
                  Welcome... Administrator
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "white",
                  minHeight: "11vh",
                  width: "55vw",
                  borderRadius: "20px",
                  mt: "3vh",
                }}
              >
                <Stack sx={{ direction: "column" }}>
                  <Typography
                    variant="darkP"
                    sx={{
                      fontWeight: theme.typography.darkP.fontWeightBold,
                      fontSize: "1.5vh",
                      pt: 1.3,
                      pl: 2,
                    }}
                  >
                    Here are the options you may find useful..
                  </Typography>
                  <Typography
                    variant="darkP"
                    sx={{
                      fontWeight: theme.typography.darkP.fontWeightBold,
                      fontSize: "1.5vh",
                      pt: 3,
                      pl: 2,
                    }}
                  >
                    Each of the buttons link to specific main functions that you
                    will require. Check them out!
                  </Typography>
                </Stack>
              </Grid>
              <Grid item sx={{ mt: "3vh" }}></Grid>
              <Grid
                item
                sx={{
                  minHeight: "59vh",
                  width: "55vw",
                  borderRadius: "20px",
                  mt: "3vh",
                }}
              >
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    minHeight: "59vh",
                    width: "55vw",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                    >
                      Jobs Related
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Grid container width={"57.5vw"}>
                      <Grid item xs={12} sm={4}>
                        <Link to="/joblisting">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              width: "100%",
                              borderRadius: "7px",
                              minHeight: "7vh",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.4vh" }}>
                              To your Job Listings
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={0} sm={4}></Grid>
                      <Grid item xs={12} sm={4}>
                        <Link to="/admin/checkjobs">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              width: "100%",
                              borderRadius: "7px",
                              minHeight: "7vh",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.4vh" }}>
                              Approve/Deny Job Listing Applications
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                    >
                      Users/Companies Related
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Grid container width={"57.5vw"}>
                      <Grid item xs={12} sm={4}>
                        <Link to="/post-job">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              minHeight: "7vh",
                              width: "100%",
                              borderRadius: "7px",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.4vh" }}>
                              Post a Job
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={0} sm={4}></Grid>
                      <Grid item xs={12} sm={4}>
                        <Link to="/admin/checkusercompanies">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              width: "100%",
                              minHeight: "7vh",
                              borderRadius: "7px",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.25vh" }}>
                              Approve/Reject Unapproved Users/Companies
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Grid container width={"57.5vw"}>
                      <Grid item xs={12}>
                        <Link to="/admin/manageusercompanies">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              width: "100%",
                              minHeight: "7vh",
                              borderRadius: "7px",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.4vh" }}>
                              Manage Existing Users/Companies
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ) : null}
        {displayMode === 2 ? (
          <Box
            sx={{
              backgroundColor: "#F3F1FF",
              width: "100vw",
              minHeight: "110vh",
            }}
          >
            <Grid
              container
              sx={{
                minHeight: "92vh",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ mt: "3vh" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                >
                  Welcome... User
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "white",
                  height: "11vh",
                  width: "55vw",
                  borderRadius: "20px",
                  mt: "3vh",
                }}
              >
                <Stack sx={{ direction: "column" }}>
                  <Typography
                    variant="darkP"
                    sx={{
                      fontWeight: theme.typography.darkP.fontWeightBold,
                      fontSize: "1.4vh",
                      pt: 1.3,
                      pl: 2,
                    }}
                  >
                    Welcome to the dashboard! Below are some quicklinks that you
                    can move around the sites with ease!
                  </Typography>
                  <Typography
                    variant="darkP"
                    sx={{
                      fontWeight: theme.typography.darkP.fontWeightBold,
                      fontSize: "1.4vh",
                      pt: 3,
                      pl: 2,
                    }}
                  >
                    Each of the buttons below brings you to a different useful
                    page. Try them out!
                  </Typography>
                </Stack>
              </Grid>
              <Grid item sx={{ mt: "3vh" }}></Grid>
              <Grid
                item
                sx={{
                  height: "59vh",
                  width: "55vw",
                  borderRadius: "20px",
                  mt: "3vh",
                }}
              >
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    height: "59vh",
                    width: "55vw",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                    >
                      Resumes Related
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Stack direction={"row"}>
                      <Link to="/resume">
                        <Button
                          variant="contained"
                          component="span"
                          style={{
                            backgroundColor: "#FF6B2C",
                            color: "white",
                            width: "22.5vw",
                            borderRadius: "7px",
                          }}
                        >
                          <Typography sx={{ fontSize: "1.4vh" }}>
                            Upload/Manage Resumes
                          </Typography>
                        </Button>
                      </Link>
                      <Divider sx={{ ml: "5vw", mr: "5vw" }} />
                      <Link to="/createresume">
                        <Button
                          variant="contained"
                          component="span"
                          style={{
                            backgroundColor: "#FF6B2C",
                            color: "white",
                            width: "22.5vw",
                            borderRadius: "7px",
                          }}
                        >
                          <Typography sx={{ fontSize: "1.4vh" }}>
                            Create a New Resume
                          </Typography>
                        </Button>
                      </Link>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                    >
                      Jobs Related
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Stack direction={"row"}>
                      <Link to="/job-search">
                        <Button
                          variant="contained"
                          component="span"
                          style={{
                            backgroundColor: "#FF6B2C",
                            color: "white",
                            width: "22.5vw",
                            borderRadius: "7px",
                          }}
                        >
                          <Typography sx={{ fontSize: "1.4vh" }}>
                            Search jobs based on your Preferences
                          </Typography>
                        </Button>
                      </Link>
                      <Divider sx={{ ml: "5vw", mr: "5vw" }} />
                      <Link to="/job-categories">
                        <Button
                          variant="contained"
                          component="span"
                          style={{
                            backgroundColor: "#FF6B2C",
                            color: "white",
                            width: "22.5vw",
                            borderRadius: "7px",
                          }}
                        >
                          <Typography sx={{ fontSize: "1.4vh" }}>
                            Browse Categories
                          </Typography>
                        </Button>
                      </Link>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Stack direction={"row"}>
                      <Link to="/usercheckapplication">
                        <Button
                          variant="contained"
                          component="span"
                          style={{
                            backgroundColor: "#FF6B2C",
                            color: "white",
                            width: "22.5vw",
                            borderRadius: "7px",
                          }}
                        >
                          <Typography sx={{ fontSize: "1.4vh" }}>
                            Check Applications
                          </Typography>
                        </Button>
                      </Link>
                      <Divider sx={{ mr: "32.5vw" }} />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ) : null}
        {displayMode === 3 ? (
          <Box
            sx={{
              backgroundColor: "#F3F1FF",
              width: "100vw",
              minHeight: "110vh",
            }}
          >
            <Grid
              container
              sx={{
                height: "92vh",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ mt: "3vh" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                >
                  Welcome... Employer
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "white",
                  height: "11vh",
                  width: "55vw",
                  borderRadius: "20px",
                  mt: "3vh",
                }}
              >
                <Stack sx={{ direction: "column" }}>
                  <Typography
                    variant="darkP"
                    sx={{
                      fontWeight: theme.typography.darkP.fontWeightBold,
                      fontSize: "1.4vh",
                      pt: 1.3,
                      pl: 2,
                    }}
                  >
                    Welcome to the dashboard! Below are some quicklinks that you
                    can move around the sites with ease!
                  </Typography>
                  <Typography
                    variant="darkP"
                    sx={{
                      fontWeight: theme.typography.darkP.fontWeightBold,
                      fontSize: "1.4vh",
                      pt: 3,
                      pl: 2,
                    }}
                  >
                    Currently there are little options available.. However, do
                    try them out!
                  </Typography>
                </Stack>
              </Grid>
              <Grid item sx={{ mt: "3vh" }}></Grid>
              <Grid
                item
                sx={{
                  height: "59vh",
                  width: "55vw",
                  borderRadius: "20px",
                  mt: "3vh",
                }}
              >
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    height: "59vh",
                    width: "55vw",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: theme.typography.h6.fontWeightBold }}
                    >
                      Jobs Related
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: 3, mb: 7 }}>
                    <Grid container width={"57.5vw"}>
                      <Grid item xs={12} sm={4}>
                        <Link to="/post-job">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              width: "100%",
                              minHeight: "10vh",
                              borderRadius: "7px",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.4vh" }}>
                              Post a New Job!
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={12} sm={4}></Grid>
                      <Grid item xs={12} sm={4}>
                        <Link to="/joblisting">
                          <Button
                            variant="contained"
                            component="span"
                            style={{
                              backgroundColor: "#FF6B2C",
                              color: "white",
                              width: "100%",
                              minHeight: "10vh",
                              borderRadius: "7px",
                            }}
                          >
                            <Typography sx={{ fontSize: "1.4vh" }}>
                              Check your Job Listings!
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </ThemeProvider>
    </Box>
  );
}

export default AdminDashboard;
