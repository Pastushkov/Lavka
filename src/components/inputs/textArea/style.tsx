import styled from "styled-components";
import { colors } from "../../../style/colors";

export const TextAreaWrapper = styled.div<{ height: number }>`
  width: 100%;
  position: relative;

  .textarea_body {
    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.white};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 500px;
      border: 5px solid transparent;
      background-clip: content-box;
      background-color: ${colors.grey.grey30};
    }

    resize: vertical;
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 130px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.grey.grey70};
    background-color: transparent;

    padding: 15px;
    border-radius: 4px;
    border: 1px solid ${colors.grey.grey30};

    &:focus {
      outline: none;
      color: ${colors.purple.purple100};
      border: 1px solid ${colors.purple.purple100};
    }

    &::placeholder {
    }

    &:disabled.disabled_show {
      color: ${colors.grey.grey70};
      border-color: ${colors.grey.grey70};
    }
  }
  .textarea_body.is_value {
    color: ${colors.purple.purple100};
    border: 1px solid ${colors.purple.purple100};
  }
  .textarea_body.textarea_error {
    border: 1px solid ${colors.red.red100};
    color: ${colors.red.red100};
  }
  .textarea_body.issue_have {
    border: 1px solid ${colors.pink.pink100};
  }

  .textarea_preffix {
    padding-left: 35px;
  }
  .textarea_suffix {
    padding-right: 35px;
  }

  .textarea_preffix_icon,
  .textarea_suffix_icon {
    position: absolute;
    top: 15px;
    cursor: pointer;
    width: 20px;
    height: auto;
  }

  .textarea_preffix_icon {
    left: 15px;
  }
  .textarea_suffix_icon {
    right: 15px;
  }
`;

export const IconWrrapper = styled.div`
  .textarea_preffix_icon,
  .textarea_suffix_icon {
    path {
      fill: ${colors.purple.purple100};
    }
  }
`;
