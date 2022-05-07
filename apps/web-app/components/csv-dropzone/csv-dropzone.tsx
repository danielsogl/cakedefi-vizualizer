import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { parse } from 'papaparse';
import { useState } from 'react';
import {
  FileSpreadsheet,
  Icon as TablerIcon,
  Upload,
  X,
} from 'tabler-icons-react';

import {
  CakeDeFiTransactionRawColum,
  CakeDeFiTransaction,
} from '../../models/cake-transaction.model';

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({
  status,
  ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <FileSpreadsheet {...props} />;
}

export const dropzoneChildren = (
  status: DropzoneStatus,
  theme: MantineTheme
) => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 220, pointerEvents: 'none' }}
  >
    <ImageUploadIcon
      status={status}
      style={{ color: getIconColor(status, theme) }}
      size={80}
    />

    <div>
      <Text size="xl" inline>
        Drag your CakeDeFi transactions CSV here or click to select file
      </Text>
    </div>
  </Group>
);

export interface CsvDropzoneProps {
  transactionParsed(transactions: CakeDeFiTransaction[]): void;
}

export function CsvDropzone(props: CsvDropzoneProps) {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);

  const handleFileDrop = (files: File[]) => {
    setLoading(true);
    parse<CakeDeFiTransactionRawColum>(files[0], {
      header: true,
      complete: ({ data }) => {
        const transactions = data.map(
          (rawColum) =>
            ({
              date: rawColum['Date'],
              operation: rawColum['Operation'],
              amount: parseFloat(rawColum['Amount']),
              asset: rawColum['Coin/Asset'],
              fiatValue: parseFloat(rawColum['FIAT value']),
              fiatCurrency: rawColum['FIAT currency'],
              transactionId: rawColum['Transaction ID'],
              withdrawalAddress: rawColum['Withdrawal address'],
              reference: rawColum['Reference'],
              relatedReferenceID: rawColum['Related reference ID'],
            } as CakeDeFiTransaction)
        );
        props.transactionParsed(transactions);
        setLoading(false);
      },
      error: () => {
        setLoading(false);
        alert('Unable to parse CSV');
      },
    });
  };

  return (
    <Dropzone
      onDrop={handleFileDrop}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={['text/csv']}
      multiple={false}
      loading={loading}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}

export default CsvDropzone;
