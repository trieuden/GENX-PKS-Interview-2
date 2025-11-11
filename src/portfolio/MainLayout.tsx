import { Box, useMediaQuery, useTheme, Stack, Fab, Button } from '@mui/material';
import { Header } from '../portfolio/components/Header';
import { useState, useEffect } from 'react';
import { Facebook, GitHub, LinkedIn, Email, ReplyAllOutlined, KeyboardArrowUp } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

type GithubProfile = {
  avatar_url: string;
  name: string;
};

export const MainLayout = () => {
  const theme = useTheme();
  const navigator = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [gitProfile, setGitProfile] = useState<GithubProfile>();
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const path = window.location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      const profile = await fetch(`https://api.github.com/users/trieuden`);
      const profileData = await profile.json();
      setGitProfile(profileData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Stack className="relative min-h-screen">
      <Box
        sx={{
          position: 'fixed',
          left: '50%',
          top: isMobile ? '8px' : '12px',
          transform: 'translateX(-50%)',
          zIndex: 1300,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Header />
      </Box>
      <Stack direction={isMobile ? 'column' : 'row'} spacing={6} className="p-4" sx={{ paddingTop: isMobile ? '80px' : '120px' }}>
        {/* Card */}
        {(path !== '/contact' || !isMobile) && (
          <Box flex={1} className="text-white flex h-fit ">
            <Stack
              className={'rounded-3xl'}
              sx={{
                borderRadius: '1.5rem',
                borderColor: '#751aff',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 4px 20px rgba(117, 26, 255, 0.5)',
                border: '1px solid #751aff',
                animation: 'slideDown 0.8s ease-out forwards',
                padding: isMobile ? '20px' : '40px',
              }}
              boxShadow={3}
            >
              <Stack className="items-start rounded-3xl " spacing={2}>
                {!isMobile && (
                  <Box
                    component={'img'}
                    className="font-bold mt-12 rounded-md self-center"
                    sx={{ borderRadius: '0.5rem' }}
                    width={'70%'}
                    src={gitProfile?.avatar_url}
                  />
                )}
                <Stack direction="column" spacing={0.1} alignItems="start">
                  <span>Hi</span>
                  <h3 className="text-3xl font-bold mt-12 text-green-500">Huỳnh Ngọc Triều</h3>
                  <h3 className={`text-[18px] text-center text-gray-400 text-italic`}>Frontend Developer Intern</h3>
                </Stack>
                <span className="text-gray-500 text-[14px]">
                  Với niềm đam mê, kinh nghiệm thực tiễn và tự học về phát triển front-end, tôi sẵn sàng đóng góp vào việc xây dựng các sản phẩm web
                  chất lượng cao.
                </span>
                <Stack direction={'row'} spacing={1} className="flex-wrap w-full justify-center">
                  <a
                    href="https://www.facebook.com/trieudennn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 items-center justify-center flex rounded-full border-1 hover:text-white transition-all"
                  >
                    <Facebook className="rounded-full" />
                  </a>
                  <a
                    href="https://github.com/trieuden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 items-center justify-center  border-1 flex rounded-full  hover:text-white transition-all"
                  >
                    <GitHub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/trieuden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 items-center justify-center  border-1 flex rounded-full  hover:text-white transition-all"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href="mailto:yantic088@gmail.com"
                    className="w-10 h-10 items-center justify-center flex  border-1 rounded-full  hover:text-white transition-all"
                  >
                    <Email />
                  </a>
                </Stack>
                <Button className="self-center" onClick={() => navigator('/')}>
                  <ReplyAllOutlined className="mr-2" />
                </Button>
              </Stack>
            </Stack>
          </Box>
        )}
        <Box flex={3}>
          <Outlet />
        </Box>
      </Stack>

      {/* Scroll to top button */}
      {showScroll && (
        <Fab
          size="small"
          onClick={scrollToTop}
          aria-label="scroll back to top"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1400,
            bgcolor: '#751aff',
            color: '#fff',
            '&:hover': { bgcolor: '#5b12d1' },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </Stack>
  );
};
