
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoClock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m17.5 22.5h10l2.5-2.5-2.5-2.5h-5v-7.5l-2.5-2.5-2.5 2.5v12.5z m2.5-20c-9.665 0-17.5 7.835000000000001-17.5 17.5s7.835000000000001 17.5 17.5 17.5 17.5-7.835000000000001 17.5-17.5-7.835000000000001-17.5-17.5-17.5z m0 30c-6.884999999999998 0-12.5-5.615000000000002-12.5-12.5 0-6.8725000000000005 5.6325-12.48 12.5-12.5 6.8675 0.019999999999999574 12.5 5.6274999999999995 12.5 12.5 0 6.884999999999998-5.615000000000002 12.5-12.5 12.5z"/></g>
            </IconBase>
        );
    }
}