"use client";
import styles from "@/styles/page.module.css";
import { Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function TituloPageAtual() {
  // Obtendo o tema do Material-UI
  const theme = useTheme();

  // Obtendo a URL atual
  const path = usePathname();

  // Inicializando um array para armazenar os segmentos da URL
  const urls: string[] = [];

  // Renderização do componente

  function camelCaseToWords(input: string): string {
    return input
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Adiciona espaço entre letras minúsculas e maiúsculas
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Adiciona espaço entre sequências de maiúsculas e minúsculas
      .replace(/^./, (str) => str.toUpperCase()); // Torna a primeira letra maiúscula
  }

  return (
    <Grid pt={2} pb={2} justifyContent={'center'} alignItems={'center'} container>
      <Grid
        xs={11} sm={11} md={11} lg={11} xl={11} item>
        {/* Container para a navegação */}
        <div
          className={styles.background}
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "3px",
            paddingBottom: "3px",
            justifyContent: "flex-start",
            flexDirection: "row",
            // // color:theme.palette.grey[400]
          }}
        >
          <Link href="/">
            <Typography variant="subtitle2" sx={{
              color: theme.palette.primary.main,
              fontWeight: '700',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}>
              {`Página Inicial `}
              <ArrowForwardIosIcon fontSize="inherit" />
            </Typography>
          </Link>
          {/* Mapeando os segmentos da URL */}
          {/* Separando a URL atual em segmentos e */}
          {path.split("/").map((e, index) => {
            const urlUsada = [...urls, e].join("/");
            urls.push(e);
            // removendo elementos vazios
            if (e !== "") {
              // Renderizando um link para cada segmento da URL
              return (
                <div key={index}>
                  <Link href={urlUsada}>
                    <Typography
                      pl={0.5}
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: '700',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* Adicionando > somente para segmentos anteriores */}
                      {index === path.split("/").length - 1 ? (
                        camelCaseToWords(e)
                        //e
                      ) : (
                        <>
                          {camelCaseToWords(e)} <ArrowForwardIosIcon fontSize="inherit" />
                        </>
                      )}
                    </Typography>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Grid>
    </Grid>
  );
}

export default TituloPageAtual;
