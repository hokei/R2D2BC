/*
 * Copyright 2018-2020 DITA (AM Consulting LLC)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Developed on behalf of: Bokbasen AS (https://www.bokbasen.no), CAST (http://www.cast.org)
 * Licensed to: Bokbasen AS and CAST under one or more contributor license agreements.
 */

import { IEventPayload_R2_EVENT_READING_LOCATION } from "../../common/events";
import { Link } from "../../../../model/Link";

export interface IReadiumIFrameWindowState {
  hashElement: Element | null;
  locationHashOverride: Element | undefined;
  locationHashOverrideInfo: IEventPayload_R2_EVENT_READING_LOCATION | undefined;
}
export interface IReadiumIFrameWindow extends Window {
  READIUM2: IReadiumIFrameWindowState;
}

export interface IReadiumIFrameState {
  id: number;
  link: Link | undefined;
}
export interface IReadiumIFrame extends HTMLIFrameElement {
  READIUM2: IReadiumIFrameState;
}
