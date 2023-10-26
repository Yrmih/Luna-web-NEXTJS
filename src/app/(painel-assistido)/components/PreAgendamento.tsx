"use client";
import { Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText, Paper, useTheme } from "@mui/material";


export default function PreAgendamento() {
    const theme = useTheme();
    return (
        <Grid container
            component={Paper}
            elevation={3}
            sx={{
                width: "100%",
                boxShadow: "0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento
                borderRadius: "8px", // Adicione a borda arredondada
            }}
        >
            <Grid item sx={{ width: "100%" }}>
                <Card sx={{ p: 2 }}>
                    <CardHeader sx={{ backgroundColor: theme.palette.primary.light, height: '10px', borderRadius: '10px', textAlign: 'center' }} title={"Pré-agendamento"} />
                    <ListItem>
                        <ListItemText primary="Sua solicitação foi sggsgsgsbvefvbfidbdvbdiv,v.fvkgnf vkngfvkgvngkfdvngk" />
                    </ListItem>
                    <CardContent sx={{ padding: 0 }}>
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="id -ggggg" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="id -ggggg" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}