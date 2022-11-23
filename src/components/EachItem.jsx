import { motion } from 'framer-motion';
import { Reorder } from 'framer-motion';

export function Content({ item, saveReordered }) {
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);

    return (
        <Reorder.Item
            key={item.id}
            value={item}
            onDragEnd={saveReordered}
            // style={{ background: 'aliceblue', height: '80px', marginBottom: '10px' }}
            variants={itemAnimation}
        >
            <motion.form >
                {item.nameText}
            </motion.form>
        </Reorder.Item>
    )
}

const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        background: 'aliceblue',
        height: '80px',
        marginBottom: '10px'
    }
};