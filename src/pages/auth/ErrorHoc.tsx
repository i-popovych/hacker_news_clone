import React from 'react';

type Props = {
    message: string | null;
};

const ErrorHoc = <P extends object>(
    Children: React.ComponentType<P>
): React.FC<P & Props> => (props) => {
    const { message, ...rest } = props;
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Children {...(rest as P)} />
            {message && <div>{message}</div>}
        </div>
    );
};

export default ErrorHoc;