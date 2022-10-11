import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';

// Progress Bar
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Root = styled('div')(({
  theme
}) => ({
  border: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: 26,
  borderRadius: 2
}));
const Value = styled('div')({
  position: 'absolute',
  lineHeight: '24px',
  width: '100%',
  display: 'flex',
  justifyContent: 'left',
  '&.spread': {
    justifyContent: 'center',
  },
});
const Bar = styled('div')({
  height: '100%',
  '&.bitFlyer': {
    backgroundImage: 'linear-gradient(90deg, rgba(0,50,255,1) 0%, rgba(100,100,255,1) 30%, rgba(255,255,255,1) 100%)',
  },
  '&.ftxJp': {
    backgroundImage: 'linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(100,255,100,1) 30%, rgba(255,255,255,1) 100%)',
  },
  '&.kraken': {
    backgroundImage: 'linear-gradient(90deg, rgba(255,150,0,1) 0%, rgba(255,150,100,1) 30%, rgba(255,255,255,1) 100%)',
  },
  '&.okCoinJp': {
    backgroundImage: 'linear-gradient(90deg, rgba(230,255,0,1) 0%, rgba(230,255,100,1) 30%, rgba(255,255,255,1) 100%)',
  },
});

const ProgressBar = /*#__PURE__*/React.memo(function ProgressBar(props) {
  const {
    value, barWidth, field, isSpread
  } = props;
  return /*#__PURE__*/_jsxs(Root, {
    children: [/*#__PURE__*/_jsx(Value, {
      className: clsx(isSpread && "spread"),
      children: isSpread ? `${(value * 100).toFixed(2)}%` : `${value.toLocaleString()}`
    }), /*#__PURE__*/_jsx(Bar, {
      className: field,
      style: {
        maxWidth: isSpread ? '0%' : `${barWidth * 100}%`
      }
    })]
  });
});
//

const RenderPB = (props) => {
  return (
    <>
      <ProgressBar value={props.value} barWidth={props.value / Math.max(props.row.bitFlyer, props.row.ftxJp, props.row.kraken, props.row.okCoinJp)} field={props.field} isSpread={props.row.isSpread} />
    </>
  );
}

const columns = [
  {
    field: 'price',
    headerName: '',
    sortable: false,
    align: 'right', 
    valueFormatter: (params) => {
      if (params.value == null) {
        return '';
      }
      return Number(params.value).toLocaleString();
    },
  },
  {
    field: 'bitFlyer',
    headerName: 'bitFlyer',
    width: 150,
    renderCell: RenderPB,
    sortable: false,
  },
  {
    field: 'ftxJp',
    headerName: 'FTX JP',
    width: 150,
    renderCell: RenderPB,
    sortable: false,
  },
  {
    field: 'kraken',
    headerName: 'Kraken',
    width: 150,
    renderCell: RenderPB,
    sortable: false,
  },
  {
    field: 'okCoinJp',
    headerName: 'OK Coin JP',
    width: 150,
    renderCell: RenderPB,
    sortable: false,
  },

];

const rows = [
  { id: 1, price: 20800, bitFlyer: 17.266, ftxJp: 17.189, kraken: 7.767, okCoinJp: 4.419, },
  { id: 2, price: 20790, bitFlyer: 8.464, ftxJp: 18.151, kraken: 1.1, okCoinJp: 3.545, },
  { id: 3, price: 20780, bitFlyer: 8.352, ftxJp: 6.239, kraken: 12.251, okCoinJp: 0.666, },
  { id: 4, price: 20770, bitFlyer: 13.198, ftxJp: 9.075, kraken: 3.346, okCoinJp: 0.725, },
  { id: 5, price: 20760, bitFlyer: 14.437, ftxJp: 12.066, kraken: 4.146, okCoinJp: 14.279, },
  { id: 6, price: 20750, bitFlyer: 10.062, ftxJp: 4.476, kraken: 12.675, okCoinJp: 0.24, },
  { id: 7, price: 20740, bitFlyer: 10.939, ftxJp: 10.856, kraken: 7.287, okCoinJp: 2.65, },
  { id: 8, price: 20730, bitFlyer: 8.938, ftxJp: 11.543, kraken: 10.216, okCoinJp: 10.411, },
  { id: 9, price: 20720, bitFlyer: 1.888, ftxJp: 6.843, kraken: 4.032, okCoinJp: 9.928, },
  { id: 10, price: 20710, bitFlyer: 4.836, ftxJp: 3.177, kraken: 1.028, okCoinJp: 6.695, },
  { id: 11, price: 20700, bitFlyer: 10.15, ftxJp: 6.074, kraken: 6.61, okCoinJp: 6.477, },
  { id: 12, price: 20690, bitFlyer: 8.881, ftxJp: 9.08, kraken: 6.242, okCoinJp: 6.947, },
  { id: 13, isSpread: true, price: null, bitFlyer: 0.002, ftxJp: 0.0005, kraken: 0.0012, okCoinJp: 0.0007, },
  { id: 14, price: 20680, bitFlyer: 4.772, ftxJp: 6.821, kraken: 5.82, okCoinJp: 10.028, },
  { id: 15, price: 20670, bitFlyer: 2.024, ftxJp: 5.689, kraken: 0.682, okCoinJp: 11.676, },
  { id: 16, price: 20660, bitFlyer: 3.989, ftxJp: 11.465, kraken: 9.256, okCoinJp: 8.758, },
  { id: 17, price: 20650, bitFlyer: 4.207, ftxJp: 9.698, kraken: 7.703, okCoinJp: 4.868, },
  { id: 18, price: 20640, bitFlyer: 6.914, ftxJp: 2.481, kraken: 8.324, okCoinJp: 9.238, },
  { id: 19, price: 20630, bitFlyer: 8.502, ftxJp: 1.176, kraken: 4.268, okCoinJp: 1.966, },
  { id: 20, price: 20620, bitFlyer: 2.092, ftxJp: 0.316, kraken: 3.456, okCoinJp: 3.936, },
  { id: 21, price: 20610, bitFlyer: 3.245, ftxJp: 4.157, kraken: 6.35, okCoinJp: 4.332, },
  { id: 22, price: 20600, bitFlyer: 4.401, ftxJp: 1.439, kraken: 1.939, okCoinJp: 0.372, },
  { id: 23, price: 20590, bitFlyer: 0.814, ftxJp: 4.619, kraken: 3.511, okCoinJp: 0.453, },
  { id: 24, price: 20580, bitFlyer: 3.235, ftxJp: 2.043, kraken: 0.393, okCoinJp: 3.76, },
  { id: 25, price: 20570, bitFlyer: 2.848, ftxJp: 2.414, kraken: 0.967, okCoinJp: 1.446, },
];

export default function RenderCellGrid() {
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid rowHeight={25} hideFooter={true} disableColumnMenu
        rows={rows} columns={columns} />
    </div>
  );
}
