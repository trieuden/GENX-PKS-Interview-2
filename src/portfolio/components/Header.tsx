import React, { useEffect, useState } from 'react';
import { IconButton, Stack, Collapse } from '@mui/material';
import { AccountCircleOutlined, BuildOutlined, WorkOutlineOutlined, PhoneEnabledOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

type IconWithLabelProps = {
  icon: React.ReactNode;
  label: string;
  handleClick?: () => void;
  active?: boolean;
};

const IconWithLabel = ({ icon, label, handleClick, active = false }: IconWithLabelProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Stack
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      direction="row"
      alignItems="center"
      spacing={1}
      className="rounded-full cursor-pointer"
    >
      <IconButton className={` hover:bg-gray-500 flex items-center transition-transform duration-200 transform`} size="large" aria-label={label}>
        {icon}
      </IconButton>

      <Collapse in={hover} orientation="horizontal" timeout={200}>
        <span className={`text-sm ${active ? 'text-[#248f24]' : 'text-black'} select-none font-semibold`}>{label}</span>
      </Collapse>
    </Stack>
  );
};

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    console.log('Current path:', currentPath);
  }, [currentPath]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Stack direction={'row'} className="bg-[#cccccc] rounded-full p-2" spacing={2}>
      <IconWithLabel
        icon={<AccountCircleOutlined className={`${currentPath === '/profile' ? 'text-[#248f24]' : 'text-[#595959]'}`} />}
        label="Profile"
        handleClick={() => {
          scrollToTop();
          navigate('/profile');
        }}
        active={currentPath === '/profile' || currentPath === '/'}
      />
      <IconWithLabel
        icon={<BuildOutlined className={`${currentPath === '/skills' ? 'text-[#248f24]' : 'text-[#595959]'}`} />}
        label="Skills"
        handleClick={() => {
          scrollToTop();
          navigate('/skills');
        }}
        active={currentPath === '/skills'}
      />
      <IconWithLabel
        icon={<WorkOutlineOutlined className={`${currentPath === '/projects' ? 'text-[#248f24]' : 'text-[#595959]'}`} />}
        label="Projects"
        handleClick={() => {
          scrollToTop();
          navigate('/projects');
        }}
        active={currentPath === '/projects'}
      />
      <IconWithLabel
        icon={<PhoneEnabledOutlined className={`${currentPath === '/contact' ? 'text-[#248f24]' : 'text-[#595959]'}`} />}
        label="Contact"
        handleClick={() => {
          scrollToTop();
          navigate('/contact');
        }}
        active={currentPath === '/contact'}
      />
    </Stack>
  );
};
