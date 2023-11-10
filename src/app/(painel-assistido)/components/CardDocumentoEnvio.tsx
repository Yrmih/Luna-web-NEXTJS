// Third party
'use client'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import PublishIcon from '@mui/icons-material/Publish'
// Internal

interface SelectedFile {
  id: number
  textonome: string
  arquivo: string
  isUploaded: boolean
}

interface CardDocumentoEnvioProps {
  data: SelectedFile[]
}

interface FormValues {
  [key: string]: File
}

const dados: SelectedFile[] = [
  { id: 1, textonome: 'Nome 1', arquivo: '', isUploaded: false },
  { id: 2, textonome: 'Nome 2', arquivo: '', isUploaded: false },
  { id: 3, textonome: 'Nome 3', arquivo: '', isUploaded: false },
  { id: 4, textonome: 'Nome 3', arquivo: '', isUploaded: false },
  { id: 5, textonome: 'Nome 3', arquivo: '', isUploaded: false },
]

export function CardDocumentoEnvio({ data }: CardDocumentoEnvioProps) {
  const [fileStatus, setFileStatus] = useState<SelectedFile[]>(data)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>() // Usando FormValues como tipo para os valores do formulário

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    // Verifica se pelo menos um arquivo foi enviado
    const hasUploadedFiles = Object.values(formData).some((value) => value)

    if (hasUploadedFiles) {
      // Implemente o envio de todos os dados para o servidor aqui
      console.log('Enviando dados para o servidor...', formData)
    } else {
      // Exibe uma mensagem se nenhum arquivo foi enviado
      alert(
        'Pelo menos um arquivo deve ser enviado para poder enviar os dados.',
      )
    }
  }

  const handleFileChange = (fileId: number, selectedFile: File) => {
    // Verificação de nulidade para depuração
    if (fileStatus) {
      // Atualize o status individual do arquivo que está sendo enviado
      const updatedFileStatus = fileStatus.map((f) =>
        f.id === fileId
          ? { ...f, textonome: selectedFile.name, isUploaded: true }
          : f,
      ) as SelectedFile[]

      setFileStatus(updatedFileStatus)

      // Implemente o envio individual do arquivo para o servidor aqui
      const formData = new FormData()
      formData.append('file', selectedFile)

      fetch('URL_DO_SERVIDOR', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Arquivo enviado com sucesso
            console.log(
              `Arquivo ${selectedFile.name} enviado com sucesso para o servidor.`,
            )
          } else {
            // Trate erros de envio aqui
            console.error('Erro no envio do arquivo para o servidor.')
          }
        })
        .catch((error) => {
          console.error('Erro ao enviar o arquivo:', error)
        })
    } else {
      console.error(
        'fileStatus é undefined. Verifique por que ele não está definido corretamente.',
      )
    }
  }

  return (
    <Grid
      container
      sx={{
        width: '100%',
      }}
      rowSpacing={3}
    >
      <Grid
        item
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Card
          component={Paper}
          elevation={3}
          sx={{
            width: '100%',
            p: 2,
            boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)',
          }}
        >
          <CardHeader title="Documentos e perguntas pendentes" />
          <CardContent sx={{ width: '100%' }}>
            <List
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexWrap: 'nowrap',
              }}
            >
              {dados.map((data) => (
                <CardItem
                  key={data.id}
                  data={data}
                  fileStatus={fileStatus}
                  setFileStatus={setFileStatus}
                  control={control}
                  errors={errors}
                  handleFileChange={handleFileChange}
                />
              ))}
            </List>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Tooltip title={`${'Enviar'}`}>
              <Button
                color="primary"
                size="medium"
                variant="contained"
                onClick={handleSubmit(onSubmit)}
              >
                Enviar
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

interface CardItemProps {
  data: SelectedFile

  fileStatus: SelectedFile[]
  setFileStatus: (status: SelectedFile[]) => void
  control: any
  errors: any
  handleFileChange: (fileId: number, selectedFile: File) => void
}

function CardItem({
  data,
  fileStatus,
  setFileStatus,
  control,
  errors,
  handleFileChange,
}: CardItemProps) {
  const fileId = data.id

  return (
    <ListItem
      sx={{
        width: '100%',
        borderTop: '1px solid #B1B0B0',
        borderBottom: '1px solid #B6B5B5',
        boxShadow: 'inset 0px 0px 3px rgb(109 107 107 / 55%)',
        borderRadius: '8px',
        margin: '8px',
      }}
      secondaryAction={
        <Tooltip
          placement="top-start"
          title={
            fileStatus?.find((f) => f.id === fileId)?.isUploaded
              ? `Arquivo ${fileStatus?.find((f) => f.id === fileId)
                  ?.textonome} enviado com sucesso!`
              : 'Enviar arquivo'
          }
        >
          <Box justifyContent={'center'} display={'flex'} alignItems={'center'}>
            <Typography>
              {fileStatus?.find((f) => f.id === fileId)?.isUploaded
                ? `Arquivo ${fileStatus?.find((f) => f.id === fileId)
                    ?.textonome} enviado com sucesso!`
                : 'Enviar arquivo'}
            </Typography>
            <IconButton
              sx={{ ml: 2 }}
              edge="end"
              component="label"
              aria-label="enviar arquivo"
            >
              <input
                type="file"
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
                  if (e.target.files && e.target.files.length > 0) {
                    const selectedFile = e.target.files[0]
                    handleFileChange(fileId, selectedFile)
                  }
                }}
              />
              <PublishIcon />
            </IconButton>
          </Box>
        </Tooltip>
      }
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          columnGap: 3,
        }}
      >
        <Typography
          title={`${data.id}`}
          component={'h1'}
          variant="subtitle1"
        >{`${data.id} -`}</Typography>
        <Typography title={data.textonome} variant="subtitle1" component={'h1'}>
          {data.textonome}
        </Typography>
        <Controller
          name={`arquivo_${fileId}`}
          control={control}
          render={({ field }) => (
            <input type="file" {...field} style={{ display: 'none' }} />
          )}
        />
        {errors[`arquivo_${fileId}`] && (
          <Typography color="error" variant="body2">
            {errors[`arquivo_${fileId} ${data.textonome}`].message}
          </Typography>
        )}
      </Box>
    </ListItem>
  )
}
