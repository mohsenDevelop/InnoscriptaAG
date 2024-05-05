
import { FC } from 'react';
import { Modal as MantineModal } from '@mantine/core';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = (props) => {
    return (<MantineModal {...props} >{props.children}</MantineModal>);
};