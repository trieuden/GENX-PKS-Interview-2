import { Button, Stack, TextField } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
export const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack flex={1} alignItems={'center'} component={'main'}>
      <Stack
        className={`rounded-3xl ${isMobile ? 'w-[100%]' : 'w-[50%]'}`}
        sx={{
          borderRadius: '1.5rem',
          borderColor: '#751aff',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 20px rgba(117, 26, 255, 0.5)',
          border: '1px solid #751aff',
          animation: 'slideDown 0.8s ease-out forwards',
          padding: isMobile ? '15px' : '40px',
        }}
        boxShadow={3}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={2}
      >
        <h1>LIÊN HỆ</h1>
        <h4 className="text-gray-500">Điền thông tin để liên lạc với tôi</h4>
        <Stack flex={1} className="w-full" spacing={1}>
          <Stack className="w-full">
            <span>Tên</span>
            <TextField size="small" className="bg-gray-300 rounded-md" />
          </Stack>
          <Stack>
            <span>Email</span>
            <TextField size="small" className="bg-gray-300 rounded-md" />
          </Stack>
          <Stack>
            <span>Nội dung</span>
            <TextField multiline size="small" className="bg-gray-300 rounded-md" minRows={3} />
          </Stack>
        </Stack>
        <Button variant="contained" className="w-[50%]">
          Gửi
        </Button>
      </Stack>
    </Stack>
  );
};
