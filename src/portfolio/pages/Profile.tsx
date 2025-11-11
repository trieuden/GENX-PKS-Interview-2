import { Stack, Box, useTheme, useMediaQuery, Button } from '@mui/material';
import { Man2Outlined, LocationOnOutlined, CalendarToday, EmailOutlined, LocalPhoneOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';

type GithubProfile = {
  avatar_url: string;
  name: string;
};

export const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack flex={1} spacing={3}>
      {/* Info */}
      <Stack spacing={2}>
        <span className={` text-4xl text-green-500 font-bold align-center`}>Thông tin cá nhân</span>
        <Stack direction={'column'} spacing={2} paddingLeft={2} className={isMobile ? 'flex-col' : ''}>
          <Stack direction={'row'} spacing={2}>
            <Stack direction={'row'} spacing={1} className="items-center text-gray-400 bg-gray-800 p-2 rounded-md w-fit mb-4 cursor-pointer">
              <CalendarToday fontSize="small" /> <span>31/01/2003</span>
            </Stack>
            <Stack direction={'row'} spacing={1} className="items-center text-gray-400 bg-gray-800 p-2 rounded-md w-fit mb-4 cursor-pointer">
              <Man2Outlined fontSize="small" /> <span>Nam</span>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={1} className="items-center text-gray-400 bg-gray-800 p-2 rounded-md w-fit mb-4 cursor-pointer">
            <LocationOnOutlined fontSize="small" /> <span>617 đường Ba Đình, phường Chánh Hưng, TP HCM</span>
          </Stack>
          <Stack spacing={2} className={isMobile ? 'flex-col' : 'flex-row'}>
            <Stack direction={'row'} spacing={1} className="items-center text-gray-400 bg-gray-800 p-2 rounded-md w-fit mb-4 cursor-pointer">
              <EmailOutlined fontSize="small" /> <span>yantic088@gmail.com</span>
            </Stack>
            <Stack direction={'row'} spacing={1} className="items-center text-gray-400 bg-gray-800 p-2 rounded-md w-fit mb-4 cursor-pointer">
              <LocalPhoneOutlined fontSize="small" /> <span>0941045139</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <span className={` text-4xl text-green-500 font-bold align-center`}>Mục tiêu nghề nghiệp</span>
        <span className="text-gray-400 text-[18px] pl-4">
          Tôi mong muốn trở thành một Frontend Developer chuyên nghiệp, hoàn thành tốt các công việc được giao trong quá trình thực tập để leo lên các
          cấp bậc cao hơn trong tương lai. Tôi khao khát được học hỏi và phát triển kỹ năng của mình trong môi trường làm việc thực tế, đóng góp vào
          sự thành công của công ty.
        </span>
      </Stack>
      {/* edu */}
      <Stack spacing={2}>
        <span className={` text-4xl text-green-500 font-bold align-center`}>Học vấn</span>
        <Stack paddingLeft={2} spacing={2} direction={isMobile ? 'column' : 'row'} className="w-fit">
          <Stack
            flex={1}
            direction={isMobile ? 'column' : 'row'}
            alignItems="center"
            spacing={4}
            className="p-4 rounded-md cursor-pointer"
            sx={{
              border: '1px solid #751aff',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

              '&:hover': {
                transform: 'scale(1.1) rotate(-5deg)', // Phóng to 110% và nghiêng trái 5 độ
                boxShadow: '0 8px 35px rgba(117, 26, 255, 0.7)', // Tăng độ bóng để nổi bật hơn
              },
            }}
          >
            <img
              src="https://th.bing.com/th/id/R.39fed7ec23f8609f93dc525acbd84fe4?rik=axwcpqmZVfDXEA&riu=http%3a%2f%2fttcntt.sgu.edu.vn%2fwp-content%2fuploads%2f2018%2f11%2fSGU-LOGO-800x800.png&ehk=WzOIeeUb0zzGEhKup8WeDNiSN0DDWRmXdpm%2ffD9RZic%3d&risl=&pid=ImgRaw&r=0"
              title="Logo SGU"
              alt="Logo SGU"
              loading="lazy"
              height={'140px'}
            ></img>
            <Stack>
              <span className="text-2xl font-semibold">Trường Đại học Sài Gòn</span>
              <span className="text-md text-gray-500">9/2021 - 10/2025</span>
              <span className="text-md mt-2">
                Ngành: Công nghệ thông tin <br /> Chuyên ngành: Kỹ thuật phần mềm
              </span>
              <span className="text-md">GPA: 7.05/10</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* exp */}
      <Stack spacing={2}>
        <span className={` text-4xl text-green-500 font-bold align-center`}>Kinh nghiệm</span>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'} paddingLeft={2} className="w-fit">
          <Stack
            flex={1}
            direction={isMobile ? 'column' : 'row'}
            alignItems="center"
            spacing={4}
            className="p-4 rounded-md cursor-pointer"
            sx={{
              border: '1px solid #751aff',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

              '&:hover': {
                transform: 'scale(1.1) rotate(-0deg)', // Phóng to 110% và nghiêng trái 5 độ
                boxShadow: '0 8px 35px rgba(117, 26, 255, 0.7)', // Tăng độ bóng để nổi bật hơn
              },
            }}
          >
            <img
              src="https://vnagroup.com.vn/wp-content/uploads/elementor/thumbs/Logo-VNA-1-p4vwbdksrgq48cbgq628vxr1d7csaiv7qwu3rocj5s.png"
              title="Logo VNA 1"
              alt="Logo VNA 1"
              loading="lazy"
            ></img>
            <Stack>
              <span className="text-2xl font-semibold">VNA Group</span>
              <span className="text-md text-gray-500">5/2025 - 7/2025</span>
              <span className="text-md mt-2">Vị trí: Front-end Developer Intern</span>
              <span className="text-md">Chi tiết:</span>
              <ul className="list-disc list-inside mt-0">
                <li>Xây dựng giao diện bằng NextJs, TypeScript kết hợp Material UI, TailwindCss </li>
                <li>Phối hợp với Back-end để sử dụng và cãi thiện API</li>
                <li>Đại diện báo cáo tiền độ hằng tuần</li>
              </ul>
              <span className="text-md">Kết quả: Được chứng nhận thực tập sinh Xuất Sắc của VNA</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
