import { Stack, useTheme, useMediaQuery } from '@mui/material';

export const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const englishProjects = [
    { skill: 'NextJs', icon: 'https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/nextjs-icon.png' },
    { skill: 'NestJs', icon: 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/nestjs-icon.png' },
    { skill: 'Vercel', icon: 'https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/vercel-icon.png' },
    { skill: 'Typescript', icon: 'https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/typescript-icon.png' },
    { skill: 'Groq AI', icon: 'https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/128/Chat-icon.png' },
    { skill: 'Free Dictionary API', icon: 'https://icons.iconarchive.com/icons/osullivanluke/orb-os-x/128/Dictionary-icon.png' },
    { skill: 'TailwindCss', icon: 'https://icons.iconarchive.com/icons/pictogrammers/material/128/tailwind-icon.png' },
    { skill: 'Material UI', icon: 'https://icons.iconarchive.com/icons/pictogrammers/material/128/material-ui-icon.png' },
    { skill: 'Docker', icon: 'https://icons.iconarchive.com/icons/pictogrammers/material/128/docker-icon.png' },
    { skill: 'PostgreSQL', icon: 'https://icons.iconarchive.com/icons/aniket-suvarna/box-logo/128/bxl-postgresql-icon.png' },
  ];
  const personalProjects = [
    { skill: 'React Native', icon: 'https://icons.iconarchive.com/icons/pictogrammers/material/128/react-icon.png' },
    { skill: 'NodeJs', icon: 'https://icons.iconarchive.com/icons/ionic/ionicons/128/logo-nodejs-icon.png' },
    { skill: 'MySql', icon: 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mysql-icon.png' },
    { skill: 'Css', icon: 'https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png' },
  ];
  const sportsProjects = [
    { skill: 'Html', icon: 'https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/html-icon.png' },
    { skill: 'Css', icon: 'https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png' },
    { skill: 'JavaScript', icon: 'https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/javascript-icon.png' },
    { skill: 'mySql', icon: 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mysql-icon.png' },
  ];

  return (
    <Stack flex={1} spacing={3} component={'main'}>
      {/* Info */}
      <Stack spacing={2}>
        <h2 className={` text-4xl text-green-500 font-bold align-center`}>Dự án</h2>
        <Stack direction={'column'} spacing={2} paddingLeft={2} className={isMobile ? 'flex-col' : ''}>
          <Stack spacing={2} className="w-[95%]">
            <Stack spacing={8}>
              <Stack
                component={'article'}
                sx={{
                  animation: 'slideDown 0.8s ease-out forwards',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 35px rgba(117, 26, 255, 0.7)',
                  },
                }}
              >
                <Stack
                  direction={'row'}
                  alignItems="center"
                  spacing={2}
                  className="p-4 relative rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <Stack className={`${isMobile ? 'w-[100%]' : 'w-[70%]'} z-1`}>
                    <i className={` ${isMobile ? 'text-xs' : 'text-md'} text-gray-500`}>7/2025 - Hiện tại</i>
                    <h3 className={` text-green-500 ${isMobile ? 'text-2xl' : 'text-3xl'} mb-4`}>
                      English Vocabulary Learning Website <span className="text-xs text-gray-500">Cá nhân</span>
                    </h3>
                    <span className="bg-[#3a4350] p-2 rounded-md">
                      Website hỗ trợ học từ vựng tiếng Anh, được xây dựng bằng NextJs, NestJs và triển khai trên Vercel. Website bao gồm các chức năng
                      cơ bản để hỗ trợ việc học từ vựng và tích hợp AI để tạo câu hỏi liên quan đến từ vựng, tạo đoạn văn và chấm điểm. Có giao diện
                      cho cả máy tính và thiết bị di động.
                    </span>
                    <Stack direction={'row'} flexWrap="wrap" alignItems="center" className="gap-2 mt-4">
                      {englishProjects.map((value, index) => (
                        <Stack
                          key={index}
                          direction={'row'}
                          alignItems={'center'}
                          className={` ${
                            isMobile ? 'p-1 text-[10px]' : 'px-4  py-2 text-sm'
                          } cursor-pointer rounded-full font-semibold text-black bg-green-500 transition-colors`}
                          spacing={1}
                        >
                          <img src={value.icon} alt="" className={isMobile ? 'w-4 h-4' : 'w-6 h-6'} />
                          <span>{value.skill}</span>
                        </Stack>
                      ))}
                    </Stack>
                    <a
                      target="_blank"
                      href="https://github.com/trieuden/vocab-trainer.git"
                      className="text-gray-400 text-[14px] mt-2 bg-[#3a435059] p-2 rounded-md w-fit "
                    >
                      <i>https://github.com/trieuden/vocab-trainer.git</i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/trieuden/vocab-trainer_be.git"
                      className="text-gray-400 text-[14px] mt-2 bg-[#3a435059] p-2 rounded-md w-fit"
                    >
                      <i>https://github.com/trieuden/vocab-trainer_be.git</i>
                    </a>
                  </Stack>
                  <img src={'/images/vocab.PNG'} className={`${isMobile ? 'w-[100%]' : 'w-[60%]'} absolute right-1 z-0 opacity-30`} />
                </Stack>
              </Stack>
              <Stack
                component={'article'}
                sx={{
                  animation: 'slideDown 0.8s ease-out forwards',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 35px rgba(117, 26, 255, 0.7)',
                  },
                }}
              >
                <Stack
                  direction={'row'}
                  alignItems="center"
                  spacing={2}
                  className="p-4 justify-end rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <Stack className={`${isMobile ? 'w-[100%]' : 'w-[70%]'} z-1 text-end`}>
                    <i className={` ${isMobile ? 'text-xs' : 'text-md'} text-gray-500`}>1/2024 - 12/2024</i>
                    <h3 className={` text-green-500 ${isMobile ? 'text-2xl' : 'text-3xl'} mb-4`}>
                      <span className="text-xs text-gray-500">Cá nhân </span>
                      Personal Management App
                    </h3>
                    <span className="bg-[#3a435059] p-2 rounded-md">
                      Một ứng dụng quản lý chi tiêu hàng ngày bao gồm các chức năng theo dõi cả thu nhập và chi tiêu hàng ngày, hàng tháng. Được xây
                      dựng bằng hai ngôn ngữ chính là React Native và NodeJs.
                    </span>
                    <Stack direction={'row'} flexWrap="wrap" alignItems="end" justifyContent={'end'} className="gap-2 mt-4">
                      {personalProjects.map((value, index) => (
                        <Stack
                          key={index}
                          direction={'row'}
                          alignItems={'center'}
                          className={` ${
                            isMobile ? 'p-1 text-[10px]' : 'px-4  py-2 text-sm'
                          } cursor-pointer rounded-full font-semibold text-black bg-green-500 transition-colors`}
                          spacing={1}
                        >
                          <img src={value.icon} alt="" className={isMobile ? 'w-4 h-4' : 'w-6 h-6'} />
                          <span>{value.skill}</span>
                        </Stack>
                      ))}
                    </Stack>
                    <a
                      target="_blank"
                      href="https://github.com/trieuden/daily-app-client.git"
                      className="text-gray-400 mt-2 text-[14px] bg-[#3a435059] p-2 rounded-md w-fit self-end"
                    >
                      <i>https://github.com/trieuden/daily-app-client.git</i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/trieuden/daily-app.git"
                      className="text-gray-400 mt-2 text-[14px] bg-[#3a435059] p-2 rounded-md w-fit self-end"
                    >
                      <i>https://github.com/trieuden/daily-app.git</i>
                    </a>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                component={'article'}
                sx={{
                  animation: 'slideDown 0.8s ease-out forwards',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 35px rgba(117, 26, 255, 0.7)',
                  },
                }}
              >
                <Stack
                  direction={'row'}
                  alignItems="center"
                  spacing={2}
                  className="p-4 relative rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <Stack className={`${isMobile ? 'w-[100%]' : 'w-[70%]'} z-1`}>
                    <i className={` ${isMobile ? 'text-xs' : 'text-md'} text-gray-500`}>7/2025 - 10/2025</i>
                    <h3 className={` text-green-500 ${isMobile ? 'text-2xl' : 'text-3xl'} mb-4`}>
                      Sports Field Manager Website <span className="text-xs text-gray-500">Nhóm 4</span>
                    </h3>
                    <span className="bg-[#3a4350] p-2 rounded-md">
                      Trang web quản lý sân thể thao với chức năng quản lý việc cho thuê sân thể thao của người dùng, chủ sở hữu sân vận động và quản
                      lý hệ thống. Đầy đủ các chức năng từ thống kê, quản lý sân thể thao, thanh toán, người dùng, v.v.
                    </span>
                    <Stack direction={'row'} flexWrap="wrap" alignItems="center" className="gap-2 mt-4">
                      {sportsProjects.map((value, index) => (
                        <Stack
                          key={index}
                          direction={'row'}
                          alignItems={'center'}
                          className={` ${
                            isMobile ? 'p-1 text-[10px]' : 'px-4  py-2 text-sm'
                          } cursor-pointer rounded-full font-semibold text-black bg-green-500 transition-colors`}
                          spacing={1}
                        >
                          <img src={value.icon} alt="" className={isMobile ? 'w-4 h-4' : 'w-6 h-6'} />
                          <span>{value.skill}</span>
                        </Stack>
                      ))}
                    </Stack>
                    <a
                      target="_blank"
                      href="https://github.com/LeDuyNhan1201/sports-field-booking-client"
                      className="text-gray-400 mt-2 text-[14px] bg-[#3a435059] p-2 rounded-md w-fit"
                    >
                      <i>https://github.com/LeDuyNhan1201/sports-field-booking-client</i>
                    </a>
                  </Stack>
                  <img src={'/images/sport.PNG'} className="w-[60%] absolute right-1 z-0 opacity-30" />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
