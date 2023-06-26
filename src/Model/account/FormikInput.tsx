import React from 'react';
import _ from 'lodash';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';

const FormikInput = ({ field: { ...fields }, form: { touched, errors }, ...props }): React.ReactNode => {
    const { id, maxLength, isDefaultValue, multiline, className, sx, hasObject = false, controlClassName, ...rest } = props;
    const error = Boolean(_.get(touched, fields?.name) && _.get(errors, fields?.name));
    const getError = () => {
        let errorString = errors;
        fields?.name?.split('.').map((name) => (errorString = errorString[name]));
        return errorString;
    };

    return (
        <FormControl fullWidth className={controlClassName}>
            {props?.label && <InputLabel>{props?.label}</InputLabel>}
            {isDefaultValue ? (
                <OutlinedInput
                    {...fields}
                    {...rest}
                    id={id}
                    className={className}
                    multiline={multiline}
                    error={error}
                    autoComplete="off"
                    inputProps={{
                        maxLength: maxLength ? maxLength : 100,
                        shrink: fields?.value?.toString(),
                    }}
                    sx={sx}
                />
            ) : (
                <OutlinedInput
                    {...fields}
                    {...rest}
                    id={id}
                    className={className}
                    value={props.type === 'number' ? fields?.value || '' : fields?.value?.trimStart()}
                    multiline={multiline}
                    error={error}
                    autoComplete="off"
                    inputProps={{
                        maxLength: maxLength ? maxLength : 100,
                        shrink: fields?.value?.toString(),
                    }}
                    sx={sx}
                />
            )}
            {error && <FormHelperText error>{error && (hasObject ? getError() : errors[fields?.name])}</FormHelperText>}{' '}
        </FormControl>
    );
};

export default FormikInput;
