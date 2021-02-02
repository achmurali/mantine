import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import Text from '../Text/Text';
import useStyles from './ErrorNotification.styles';

interface ErrorNotificationProps
  extends DefaultProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  error?: Error;
}

export default function ErrorNotification({
  className,
  title,
  description,
  error,
  ...others
}: ErrorNotificationProps) {
  const classes = useStyles();

  return (
    <div className={cx(classes.errorNotification, className)} {...others}>
      {title && (
        <Text bold className={classes.title} size="sm">
          {title}
        </Text>
      )}

      <div className={classes.body}>
        {description && <Text size="sm">{description}</Text>}
        {error instanceof Error && (
          <Text className={classes.error} theme="danger" size="sm">
            {error.message}
          </Text>
        )}
      </div>
    </div>
  );
}

ErrorNotification.displayName = '@mantine/core/ErrorNotification';
