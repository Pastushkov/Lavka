import { SelectArrow } from "assets/images/svgs";
import React, { FC, useEffect, useMemo, useState } from "react";
import { colors } from "style/colors";
import CustomInput from "../../inputs";
import { IOption, IFormikSelect } from "../interfaces";
import { List } from "../list/List";
import { IconWrapper, SelectWrapper } from "../style";

const initialSelect = { label: "", value: "" };

export const CustomOptionsSelectInput: FC<IFormikSelect> = ({
  label,
  name,
  value,
  setFieldValue,
  options,
  disabled,
  section,
  valueLabel,
  noInputChange,
  filterFunc
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(initialSelect);
  const [search, setSearch] = useState(options as IOption[]);

  const filteredOptions = useMemo(() => {
    if (filterFunc) return (options as IOption[])?.filter(filterFunc);
    return options as IOption[];
  }, [filterFunc, options]);

  useEffect(() => {
    if (!isOpen)
      setInput(
        (options as IOption[])?.find(({ value: v }) => value === v) ??
          (options as IOption[])?.find(({ value: v }) => v === "") ?? {
            label: valueLabel ?? "",
            value: value ?? ""
          }
      );
  }, [value, options, isOpen]);

  useEffect(() => {
    if (!isOpen) setSearch(filteredOptions);
  }, [isOpen]);

  const handleClick = ({ value: v }: IOption) => {
    setIsOpen(false);
    setFieldValue(name, v);
  };

  const handleInput = (e: any) => {
    if (isOpen) {
      setInput({ label: e.target.value, value: "" });
    }
    setIsOpen(true);
    setSearch(filteredOptions?.filter((item) => item.label.toLowerCase().includes(e.target.value.toLowerCase())));
    if (!noInputChange) {
      setFieldValue(name, e.target.value);
    }
  };

  return (
    <SelectWrapper
      disabled={disabled}
      className="mode-input"
      isOpen={isOpen}
      onClick={() => {
        if (!disabled) setIsOpen(!isOpen);
      }}
    >
      <CustomInput
        onBlur={() => {
          setIsOpen(false);
        }}
        activeMode
        name={name}
        placeholder={label}
        value={input.label}
        onChange={handleInput}
        suffix={{
          icon: (
            <IconWrapper className="mode-input" isOpen={isOpen}>
              <SelectArrow fill={colors.grey.grey70} />
            </IconWrapper>
          ),
          own: true
        }}
        disabled={disabled}
        disabledShow
        selectMode
      />
      {isOpen && <List onChange={handleClick} options={search} section={section} />}
    </SelectWrapper>
  );
};
