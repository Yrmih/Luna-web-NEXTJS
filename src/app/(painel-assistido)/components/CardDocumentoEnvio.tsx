// Third party
"use client";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// Internal
import { MediaCard } from "./MediaCard";

export default function CardDocumentoEnvio() {
    const theme = useTheme();
    return (
        <Grid container sx={{ width: "100%" }} rowSpacing={3}>
            <Grid item sx={{ width: "100%", display: "flex" }}>
                <Card sx={{ width: "100%", p:2 }}>
                    <CardHeader title="Documentos e perguntas pendentes" />
                    <CardContent sx={{ width: "100%" }}>
                        <List sx={{ width: "100%" }}>
                            <ListItem
                                sx={{
                                    width: "100%",
                                    borderTop: "1px solid #B1B0B0", // Borda superior
                                    borderBottom: "1px solid #B6B5B5", // Borda inferior
                                    boxShadow: "0px 0px 6px rgb(161 160 160)", // Adicione o sombreamento
                                    borderRadius: "8px", // Adicione a borda arredondada
                                    margin: "8px", // Espaçamento externo
                                }}
                                secondaryAction={
                                    <Tooltip title="Enviar arquivo">
                                        <IconButton edge="end" aria-label="enviar arquivo">
                                            <CloudUploadIcon />
                                        </IconButton>
                                    </Tooltip>
                                }
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        flexWrap: "nowrap",
                                        flexDirection: "row",
                                        columnGap: 3,
                                    }}
                                >
                                    <ListItemText primary="id -" />
                                    <ListItemText primary="texto do item 2" />
                                </Box>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
