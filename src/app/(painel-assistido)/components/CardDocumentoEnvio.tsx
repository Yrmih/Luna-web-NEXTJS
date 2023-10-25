// Third party
"use client";
import React, { useState } from 'react';
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
    Paper,
    Tooltip,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// Internal

export function CardDocumentoEnvio() {
    const [fileStatus, setFileStatus] = useState({ name: '', isUploaded: false });

    return (
        <Grid container
            sx={{
            width: "100%",
            }}
            rowSpacing={3}>
            <Grid item sx={{
                width: "100%", display: "flex",
            }}>
                <Card
                    component={Paper}
                    elevation={3}
                    sx={{
                        width: "100%", p: 2,
                        boxShadow: "0px 0px 6px hsl(0deg 0.79% 35.3% / 54%)", // Adicione o sombreamento

                }}>
                    <CardHeader title="Documentos e perguntas pendentes" />
                    <CardContent sx={{ width: "100%" }}>
                        <List sx={{ width: "100%" }}>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <ListItem
                                    sx={{
                                        width: "100%",
                                        borderTop: "1px solid #B1B0B0", // Borda superior
                                        borderBottom: "1px solid #B6B5B5", // Borda inferior
                                        boxShadow: "inset 0px 0px 3px rgb(109 107 107 / 55%);", // Adicione o sombreamento
                                        borderRadius: "8px", // Adicione a borda arredondada
                                        margin: "8px", // Espaçamento externo
                                    }}
                                    secondaryAction={
                                        <Tooltip title={fileStatus.isUploaded ? "Enviado" : "enviar arquivo"}>
                                            <Box justifyContent={'center'} display={'flex'} alignItems={'center'}>
                                                <Typography> {fileStatus.isUploaded ? "Enviado" : "enviar arquivo"}</Typography>
                                                <IconButton
                                                    edge="end" component="label" aria-label="enviar arquivo">
                                                <CloudUploadIcon />
                                                    <input type="file"
                                                        style={{
                                                            clip: 'rect(0 0 0 0)',
                                                            clipPath: 'inset(50%)',
                                                            height: 1,
                                                            overflow: 'hidden',
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            whiteSpace: 'nowrap',
                                                            width: 1,
                                                        }}
                                                        onChange={(e) => {
                                                            const selectedFile = e.target.files?.[0]; // Usar ? para tratar como opcional
                                                            if (selectedFile) {
                                                                setFileStatus({ name: selectedFile.name, isUploaded: true });
                                                                // Implemente o envio do arquivo para o servidor aqui
                                                            } else {
                                                                setFileStatus({ name: '', isUploaded: false });
                                                            }
                                                        }}
                                                    />
                                                </IconButton>
                                            </Box>
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
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
