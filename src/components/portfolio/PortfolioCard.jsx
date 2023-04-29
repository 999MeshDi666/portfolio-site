import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";


const PortfolioCard = (props) => {
  const {color, title, subtitle, link, img} = props;
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: color,
        justifyContent: "space-between",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        width: {xs: "330px", md: "360px"}
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "18px", sm: "22px" },
              fontWeight: "bold",
              whiteSpace: "break-spaces",
              color: "#fff",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              marginTop: "6px",
              fontSize: { xs: "12px", sm: "16px" },
              lineHeight: { xs: "16px", sm: "20px" },
              whiteSpace: "break-spaces",
              color: "#BDBDBD",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Button
          varitant="contained"
          href = {link}
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            marginTop: "18px",
            color: "#000",
            width: "86px",
            height: "28px",
            textTransform: "lowercase",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          open
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        src={img}
        sx={{
          width: { xs: "86px", sm: "100px" },
          height: { xs: "86px", sm: "100px" },
          marginLeft: "10px",
        }}
      />
    </Card>
  );
};

export default PortfolioCard;
