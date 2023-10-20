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
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CallIcon from '@mui/icons-material/Call';

export default function CardAvatar() {
  return (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid
          item
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Card
            component={Paper}
            sx={{
              width: "100%",
              p: 2,
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
        <Grid item sx={{ width: "100%" }}>
          <Card
            component={Paper}
            sx={{
              width: "100%",
              p: 2,
              boxShadow: "0px 0px 6px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento
              borderRadius: "8px", // Adicione a borda arredondada
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <List sx={{ width: "100%" }}>
              <ListItem disableGutters>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <IconButton edge="end" aria-label="comment">
                    <DescriptionIcon />
                  </IconButton>
                </Box>
                <ListItemText
                  primary={0}
                  secondary={`Processos`}
                  sx={{ pr: 2 }}
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Card
            component={Paper}
            sx={{
              width: "100%",
              p: 2,
              boxShadow: "0px 0px 6px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento
              borderRadius: "8px", // Adicione a borda arredondada
            }}
          >
            <Typography>Interessados</Typography>
            <List sx={{ width: "100%" }}>
              <ListItem disableGutters>
                <ListItemText primary={`Nome do interessado`} />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
