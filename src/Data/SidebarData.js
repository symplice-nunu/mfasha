import { AiOutlineHome } from 'react-icons/ai';
import { GiDoctorFace } from 'react-icons/gi';
import { GrUserManager } from 'react-icons/gr';
import { FaUserNurse } from 'react-icons/fa';
import { BsFillHospitalFill } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { FaUsersCog } from 'react-icons/fa';

export const SidebarData = [
    {
        icon: <AiOutlineHome />,
        Path: '/dashboard',
        Name: 'Home',
    },
    {
        icon: <GiDoctorFace />,
        Path: '/doctor',
        Name: 'Doctor',
    },
    {
        icon: <GrUserManager />,
        Path: '/dg',
        Name: 'General Director',
    },
    {
        icon: <FaUserNurse />,
        Path: '/nurse',
        Name: 'Nurse',
    },
    {
        icon: <BsFillHospitalFill />,
        Path: '/patient',
        Name: 'Patient',
    },
    {
        icon: <GrUserAdmin />,
        Path: '/roles',
        Name: 'Roles',
    },
    {
        icon: <FaUsersCog />,
        Path: '/users',
        Name: 'Users',
    }
]