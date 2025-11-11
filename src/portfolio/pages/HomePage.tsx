import { Stack, Box, useTheme, useMediaQuery, Button } from '@mui/material';
import { Facebook, GitHub, LinkedIn, Email, DownloadOutlined, KeyboardDoubleArrowRightOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type GithubProfile = {
  avatar_url: string;
  name: string;
};

export const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [gitProfile, setGitProfile] = useState<GithubProfile>();

  useEffect(() => {
    const fetchData = async () => {
      const profile = await fetch(`https://api.github.com/users/trieuden`);
      const profileData = await profile.json();
      setGitProfile(profileData);
    };
    fetchData();
  }, []);

  return (
    <Box flex={1} className="text-white h-[100vh] items-center justify-center flex" component={'main'}>
      <Stack
        className={'rounded-3xl'}
        justifyContent={'center'}
        sx={{
          borderRadius: '1.5rem',
          borderColor: '#751aff',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 20px rgba(117, 26, 255, 0.5)',
          border: '1px solid #751aff',
          animation: 'slideDown 0.8s ease-out forwards',
          width: isMobile ? '100%' : '500px',
          padding: isMobile ? '20px' : '40px',
          height: isMobile ? '100%' : 'auto',
        }}
        boxShadow={3}
      >
        <Stack className="items-start rounded-3xl " spacing={2}>
          <Box
            component={'img'}
            className="font-bold mt-12 rounded-md self-center"
            sx={{ borderRadius: '0.5rem' }}
            width={'70%'}
            src={gitProfile?.avatar_url}
          />
          <Stack direction="column" spacing={0.1} alignItems="start">
            <span>Hi</span>
            <h2 className="text-3xl font-bold mt-12 text-green-500">Huỳnh Ngọc Triều</h2>
            <h3 className={`text-[18px] text-center text-gray-400 text-italic`}>Frontend Developer Intern</h3>
          </Stack>
          <p className="text-gray-500 text-[14px]">
            Với niềm đam mê, kinh nghiệm thực tiễn và tự học về phát triển front-end, tôi sẵn sàng đóng góp vào việc xây dựng các sản phẩm web chất
            lượng cao.
          </p>
          <Stack direction={'row'} spacing={1} className="flex-wrap w-full justify-center">
            <a
              href="https://www.facebook.com/trieudennn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 items-center justify-center flex rounded-full border-1 hover:bg-green-500 hover:text-white transition-all"
            >
              <Facebook className="rounded-full" />
            </a>
            <a
              href="https://github.com/trieuden"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 items-center justify-center  border-1 flex rounded-full hover:bg-green-500 hover:text-white transition-all"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/trieuden/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 items-center justify-center  border-1 flex rounded-full hover:bg-green-500 hover:text-white transition-all"
            >
              <LinkedIn />
            </a>
            <a
              href="mailto:yantic088@gmail.com"
              className="w-10 h-10 items-center justify-center flex  border-1 rounded-full  hover:bg-green-500 hover:text-white transition-all"
            >
              <Email />
            </a>
          </Stack>
          <Stack direction={'row'} spacing={2} className="w-full justify-center mt-4 mb-4">
            <Button variant="outlined" className="border-green-500 text-green-500" href="/HuynhNgocTrieu-cv.pdf" download>
              <DownloadOutlined fontSize="small" />
              <span className="ml-1">CV</span>
            </Button>
            <Button
              onClick={() => navigate('/profile')}
              variant="outlined"
              className="border-green-500 text-green-500 bg-green-500 hover:bg-[#005ce6] hover:text-white"
            >
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <span>Chi tiết</span>
                <KeyboardDoubleArrowRightOutlined fontSize="small" />
              </Stack>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
