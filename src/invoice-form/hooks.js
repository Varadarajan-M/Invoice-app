import { useState, useCallback } from 'react';

export const useFormOpen = () => {
	const [formOpen, setFormOpen] = useState(false);

	const onOpen = useCallback(() => {
		setFormOpen(true);
	}, []);

	const onClose = useCallback(() => {
		setFormOpen(false);
	}, []);

	return { formOpen, onOpen, onClose };
};
