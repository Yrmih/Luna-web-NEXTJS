import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export function CardAvatar() {
  return (
      <Grid container sx={{rowGap:2}}>

          <Card
            component={Paper}
            sx={{
              width: "100%",

              boxShadow: "0px 0px 6px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento
              borderRadius: "8px", // Adicione a borda arredondada
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <List sx={{ width: "100%" }}>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={"Remy Sharp"}
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: { xs: 40, lg: 70 },
                      height: { xs: 40, lg: 70 },
                        my: 1,
                        boxShadow: "0px 0px 6px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento
                    }}
                  />
                </ListItemAvatar>
                <Typography>nome do assistido</Typography>
                <ListItemText primary={`Assitido(a)`} />
                <Box p={2} display={'flex'} justifyContent={'center'} textAlign={'justify'} alignItems={'flex-start'} flexDirection={'column'}>
                  <ListItemText primary={`Cpf:${' numero do cpf'}`} />
                  <ListItemText primary={`E-mail:${" E-mail do assistido"}`} />
                <ListItemText primary={`Número:${" numero do asistido"}`} />
                </Box>
              </ListItem>
            </List>
          </Card>

      </Grid>
  );
}
