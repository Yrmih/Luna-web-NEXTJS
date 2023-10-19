import { Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText } from "@mui/material";


export default function PreAgendamento() {

    return (
        <Grid container>
            <Grid item sx={{ width: "100%" }}>
            <Card sx={{p:2}}>
                    <CardHeader sx={{ backgroundColor: '#FFC400', height: '10px', borderRadius: '10px', textAlign:'center' }} title={"Pré-agendamento"} />
                    <ListItem>
                        <ListItemText primary="Sua solicitação foi sggsgsgsbvefvbfidbdvbdiv,v.fvkgnf vkngfvkgvngkfdvngk" />
                    </ListItem>
                    <CardContent sx={{padding:0}}>
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