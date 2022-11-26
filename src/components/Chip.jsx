import {Box, Typography } from '@mui/material'

const Chip = ({text}) => {
    return (
        <Box className="text-white bg-slate-500 rounded mr-2" sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant="subtitle2" className='px-2'>{text}</Typography>
        </Box>
    )
}

export default Chip