import { Stack, useTheme, useMediaQuery, LinearProgress } from '@mui/material';

export const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const LanguagesAndFW = {
    skills: [
      'ReactJs',
      'NextJs',
      'React Native',
      'NodeJS',
      'NestJs',
      'Java',
      'HTML',
      'Css',
      'Php',
      'Material UI',
      'TailwindCss',
      'JavaScript',
      'TypeScript',
    ],
    skillIcon: [
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/react-icon.png`,
      `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/nextjs-icon.png`,
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/react-icon.png`,
      `https://icons.iconarchive.com/icons/ionic/ionicons/128/logo-nodejs-icon.png`,
      `https://icons.iconarchive.com/icons/simpleicons-team/simple/128/nestjs-icon.png`,
      `https://icons.iconarchive.com/icons/icons8/ios7/128/Logos-Java-Coffee-Cup-Logo-Copyrighted-icon.png`,
      `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/html-icon.png`,
      `https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png`,
      `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/php-icon.png`,
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/material-ui-icon.png`,
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/tailwind-icon.png`,
      `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/javascript-icon.png`,
      `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/typescript-icon.png`,
    ],
    rates: [80, 80, 60, 50, 60, 70, 80, 80, 60, 80, 80, 70, 80],
  };

  const databases = {
    skills: ['MySql', 'Docker', 'Github', 'GitLab', 'PostgreSQL'],
    skillIcon: [
      `https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mysql-icon.png`,
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/docker-icon.png`,
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/github-icon.png`,
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/gitlab-icon.png`,
      `https://icons.iconarchive.com/icons/aniket-suvarna/box-logo/128/bxl-postgresql-icon.png`,
    ],
    rates: [70, 60, 80, 70, 70],
  };
  const tools = {
    skills: ['VS Code', 'Postman', 'Figma', 'Swagger'],
    skillIcon: [
      `https://icons.iconarchive.com/icons/pictogrammers/material/128/microsoft-visual-studio-code-icon.png`,
      `https://icons.iconarchive.com/icons/simpleicons-team/simple/128/postman-icon.png`,
      `https://icons.iconarchive.com/icons/colebemis/feather/128/figma-icon.png`,
      `https://icons.iconarchive.com/icons/simpleicons-team/simple/128/swagger-icon.png`,
    ],
    rates: [90, 80, 80, 70],
  };
  const softSkills = {
    skills: ['Teamwork', 'Quản lý thời gian', 'Giao tiếp', 'Tư duy phản biện'],
  };

  return (
    <Stack flex={1} spacing={3}>
      {/* Info */}
      <Stack spacing={2}>
        <span className={` text-4xl text-green-500 font-bold align-center`}>Kĩ năng kỹ thuật</span>
        <Stack direction={'column'} spacing={4} className={isMobile ? 'flex-col' : ''}>
          {/* Language and frameworks */}
          <Stack spacing={2}>
            <span className="text-xl font-semibold">Ngôn ngữ & Frameworks:</span>
            <Stack paddingLeft={2} spacing={2} className="w-full">
              <Stack direction={'row'} flexWrap="wrap" className="w-full gap-3">
                {LanguagesAndFW.skills.map((skill, index) => (
                  <Stack key={index}>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      className="px-4 cursor-pointer py-2 bg-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                      style={{
                        border: '1px solid #751aff',
                        animationFillMode: 'backwards',
                      }}
                      spacing={1}
                    >
                      <img src={LanguagesAndFW.skillIcon[index]} alt="" className="w-6 h-6" />
                      <span>{skill}</span>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      color="warning"
                      value={LanguagesAndFW.rates[index]}
                      sx={{ height: 4, borderRadius: 2, mt: 0.5, width: 80, alignSelf: 'center' }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          {/* Databases */}
          <Stack spacing={2}>
            <span className="text-xl font-semibold">Databases:</span>
            <Stack paddingLeft={2} spacing={2} className="w-full">
              <Stack direction={'row'} flexWrap="wrap" className="w-full gap-3">
                {databases.skills.map((skill, index) => (
                  <Stack key={index}>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      className="px-4 cursor-pointer py-2 bg-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                      style={{
                        border: '1px solid #751aff',
                        animationFillMode: 'backwards',
                      }}
                      spacing={1}
                    >
                      <img src={databases.skillIcon[index]} alt="" className="w-6 h-6" />
                      <span>{skill}</span>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={databases.rates[index]}
                      sx={{ height: 4, borderRadius: 2, mt: 0.5, width: 80, alignSelf: 'center' }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          {/* Tools */}
          <Stack spacing={2}>
            <span className="text-xl font-semibold">Tools:</span>
            <Stack paddingLeft={2} spacing={2} className="w-full">
              <Stack direction={'row'} flexWrap="wrap" className="w-full gap-3">
                {tools.skills.map((skill, index) => (
                  <Stack key={index}>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      className="px-4 cursor-pointer py-2 bg-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                      style={{
                        border: '1px solid #751aff',
                        animationFillMode: 'backwards',
                      }}
                      spacing={1}
                    >
                      <img src={tools.skillIcon[index]} alt="" className="w-6 h-6" />
                      <span>{skill}</span>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      color="inherit"
                      value={tools.rates[index]}
                      sx={{ height: 4, borderRadius: 2, mt: 0.5, width: 80, alignSelf: 'center' }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          {/* Soft skills */}
          <Stack spacing={2}>
            <span className="text-xl font-semibold">Kĩ năng mềm:</span>
            <Stack paddingLeft={2} spacing={2} className="w-full">
              <Stack direction={'row'} flexWrap="wrap" className="w-full gap-3">
                {softSkills.skills.map((skill, index) => (
                  <Stack key={index}>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      className="px-4 cursor-pointer py-2 bg-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                      style={{
                        border: '1px solid #751aff',
                        animationFillMode: 'backwards',
                      }}
                      spacing={1}
                    >
                      <span>{skill}</span>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          {/* English */}
          <Stack spacing={2}>
            <span className="text-xl font-semibold">Tiếng anh:</span>
            <Stack paddingLeft={2} spacing={2} className="w-full">
              <Stack direction={'row'} flexWrap="wrap" className="w-full gap-3">
                <Stack>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    className="px-4 cursor-pointer py-2 bg-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                    style={{
                      border: '1px solid #751aff',
                      animationFillMode: 'backwards',
                    }}
                    spacing={1}
                  >
                    <span>Đọc hiểu</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
