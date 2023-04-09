import { SelectArrow } from "assets/images/svgs";
import { useField } from "formik";
import React, { FC, useEffect, useMemo, useState } from "react";
import { colors } from "style/colors";
import { IOption, IFormikSelect } from "./interfaces";
import { List } from "./list/List";
import {
  ErrorSelect,
  IconWrapper,
  SelectBodyWrapper,
  SelectLabel,
  SelectText,
  SelectWrapper,
  SelectWrapperBox
} from "./style";

const initialSelect = { label: "", value: "" };

const CustomSelect: FC<IFormikSelect> = ({
  id,
  label,
  name,
  value,
  setFieldValue,
  options,
  filterFunc,
  disabled,
  defaultValueFirst,
  bodyMinHeight,
  bodyPadding,
  error,
  valueLabel
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(initialSelect);
  const [field, meta] = useField(name);

  useEffect(() => {
    setDefaultValue(
      (options as IOption[])?.find(({ value: v }: any) => value === v) ??
        (options as IOption[])?.find(({ value: v }: any) => v === "") ?? {
          label: valueLabel ?? "",
          value: value ?? ""
        }
    );
  }, [value, options]);

  useEffect(() => {
    if (defaultValueFirst) {
      setDefaultValue((options as IOption[])[0]);
      setFieldValue(name, (options as IOption[])[0].value);
    }
  }, [defaultValueFirst, options]);

  const handleClick = ({ label: l, value: v }: IOption) => {
    setDefaultValue({ label: l, value: v });
    setFieldValue(name, v, true);
    setIsOpen(false);
  };

  const filteredOptions = useMemo(() => {
    if (filterFunc && typeof options !== "string" && Array.isArray(options)) return options?.filter(filterFunc) ?? [];
    return options;
  }, [filterFunc, options]);

  return (
    <SelectWrapperBox>
      <SelectWrapper
        isOpen={isOpen}
        tabIndex={0}
        onBlur={() => {
          field.onBlur({ target: { name } });
          setIsOpen(false);
        }}
        onClick={(e: any) => {
          e.stopPropagation();
          if (!disabled) setIsOpen(!isOpen);
        }}
        disabled={disabled}
        id={id ?? `id_for_test_select_${field.name}`}
        className={(meta.error && meta.touched) || error ? "error SelectWrapper" : "SelectWrapper"}
      >
        <SelectLabel className={(meta.error && meta.touched) || error ? "error" : ""}>{label}</SelectLabel>
        <SelectBodyWrapper minHeight={bodyMinHeight} padding={bodyPadding}>
          <SelectText>{defaultValue?.label}</SelectText>
          <IconWrapper isOpen={isOpen}>
            <SelectArrow fill={colors.grey.grey70} />
          </IconWrapper>
        </SelectBodyWrapper>
        {isOpen && <List onChange={handleClick} options={filteredOptions as IOption[]} />}
      </SelectWrapper>
      {((meta.error && meta.touched) || error) && <ErrorSelect>{meta.error || error}</ErrorSelect>}
    </SelectWrapperBox>
  );
};

export default CustomSelect;
