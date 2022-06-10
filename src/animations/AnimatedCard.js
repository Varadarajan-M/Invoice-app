import React from 'react';
import { motion, usePresence } from 'framer-motion';

const AnimatedCard = ({ children, delay }) => {
	const [isPresent, safeToRemove] = usePresence();
	const animations = {
		initial: 'initial',
		animate: isPresent ? 'in' : 'out',
		custom: delay,
		variants: {
			initial: {
				opacity: 0,
			},
			in: (delay) => ({
				opacity: 1,
				transition: {
					delay: delay < 5 ? delay * 0.2 : 1.2,
				},
			}),
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
	};

	return <motion.div {...animations}>{children}</motion.div>;
};

export default AnimatedCard;
