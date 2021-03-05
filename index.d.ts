export interface IHarvestUser {
  id:number;
  first_name:string;
  last_name:string;
  email:string;
  telephone:string;
  timezone:string;
  weekly_capacity:number;
  has_access_to_all_future_projects:boolean;
  is_contractor:boolean;
  is_admin:boolean;
  is_project_manager:boolean;
  can_see_rates:boolean;
  can_create_projects:boolean;
  can_create_invoices:boolean;
  is_active:boolean;
  calendar_integration_enabled:boolean;
  calendar_integration_source?:null;
  created_at:string;
  updated_at:string;
  roles:string[]
  avatar_url:string;
}

export interface IHarvestTimeEntry {
  id:number;
  spent_date:string;
  hours:number;
  rounded_hours:number;
  notes?:string;
  is_locked:boolean;
  locked_reason?:string;
  is_closed:boolean;
  is_billed:boolean;
  timer_started_at:null;
  started_time:null;
  ended_time:null;
  is_running:boolean;
  billable:boolean;
  budgeted:boolean;
  billable_rate:number;
  cost_rate:number;
  created_at:string;
  updated_at:string;

  user:{ id:number; name:string; };
  client:{ id:number; name:string; currency:string; };
  project:{ id:number, name:string; code:string; };
  task:{ id:number; name:string; };

  user_assignment: {
    id:number;
    is_project_manager:boolean;
    is_active:boolean;
    use_default_rates:boolean;
    budget:null;
    created_at:string;
    updated_at:string;
    hourly_rate:number;
  };

  task_assignment: {
    id:number;
    billable:boolean;
    is_active:boolean;
    created_at:string;
    updated_at:string;
    hourly_rate:number;
    budget: null;
  };

  invoice:null;
  external_reference: {
    id: string,
    group_id:string,
    permalink: string,
    service: string,
    service_icon_url: string
  } | null;
}

export interface IHarvestTask {
  id:                  number;
  name:                string;
  billable_by_default: boolean;
  default_hourly_rate: null;
  is_default:          boolean;
  is_active:           boolean;
  created_at:          string;
  updated_at:          string;
}

export interface IHarvestRole {
  id:         number;
  name:       string;
  created_at: string;
  updated_at: string;
  user_ids:   number[];
}

export interface IHarvestProject {
  id:                                  number;
  name:                                string;
  code:                                string;
  is_active:                           boolean;
  is_billable:                         boolean;
  is_fixed_fee:                        boolean;
  bill_by:                             string;
  budget:                              null;
  budget_by:                           string;
  budget_is_monthly:                   boolean;
  notify_when_over_budget:             boolean;
  over_budget_notification_percentage: number;
  show_budget_to_all:                  boolean;
  created_at:                          string;
  updated_at:                          string;
  starts_on:                           string;
  ends_on:                             null;
  over_budget_notification_date:       null;
  notes:                               string;
  cost_budget:                         number;
  cost_budget_include_expenses:        boolean;
  hourly_rate:                         number;
  fee:                                 number;
  client:                              IHarvestProjectClient;
}

export interface IHarvestProjectClient {
  id:       number;
  name:     string;
  currency: string;
}

export interface IHarvestInvoiceItemCategory {
  id:             number;
  name:           string;
  use_as_service: boolean;
  use_as_expense: boolean;
  created_at:     string;
  updated_at:     string;
}

export interface IHarvestInvoice {
  id:                   number;
  client_key:           string;
  number:               string;
  purchase_order:       string;
  amount:               number;
  due_amount:           number;
  tax:                  number;
  tax_amount:           number;
  tax2:                 null;
  tax2_amount:          number;
  discount:             null;
  discount_amount:      number;
  subject:              string;
  notes:                string;
  state:                string;
  period_start:         null;
  period_end:           null;
  issue_date:           string;
  due_date:             string;
  payment_term:         string;
  sent_at:              null;
  paid_at:              null;
  closed_at:            null;
  recurring_invoice_id: null;
  created_at:           string;
  updated_at:           string;
  paid_date:            null;
  currency:             string;
  client:               IHarvestInvoiceClient;
  estimate:             null;
  retainer:             null;
  creator:              IHarvestInvoiceClient;
  line_items:           IHarvestInvoiceLineItem[];
}

export interface IHarvestInvoiceClient {
  id:   number;
  name: string;
}

export interface IHarvestInvoiceLineItem {
  id:          number;
  kind:        string;
  description: string;
  quantity:    number;
  unit_price:  number;
  amount:      number;
  taxed:       boolean;
  taxed2:      boolean;
  project:     null;
}


export interface IHarvestEstimateItemCategory {
  id:number;
  name:string;
  created_at:string;
  updated_at:string;
}

export interface IHarvestEstimate {
  id:              number;
  client_key:      string;
  number:          string;
  purchase_order:  string;
  amount:          number;
  tax:             number;
  tax_amount:      number;
  tax2:            null;
  tax2_amount:     number;
  discount:        null;
  discount_amount: number;
  subject:         string;
  notes:           string;
  state:           string;
  issue_date:      string;
  sent_at:         string;
  created_at:      string;
  updated_at:      string;
  accepted_at:     string;
  declined_at:     null;
  currency:        string;
  client:          IHarvestEstimateClient;
  creator:         IHarvestEstimateClient;
  line_items:      IHarvestEstimateLineItem[];
}

export interface IHarvestEstimateClient {
  id:number;
  name:string;
}

export interface IHarvestEstimateLineItem {
  id:          number;
  kind:        string;
  description: string;
  quantity:    number;
  unit_price:  number;
  amount:      number;
  taxed:       boolean;
  taxed2:      boolean;
}

export interface IHarvestContact {
  id:number;
  title:string;
  first_name:string;
  last_name:string;
  email:string;
  phone_office:string;
  phone_mobile:string;
  fax:string;
  created_at:string;
  updated_ad:string;
  client:{
    id:number;
    name:string;
  }
}

export interface IHarvestClient {
  id:number;
  name:string;
  is_active:boolean;
  address:string;
  statement_key:string;
  created_at:string;
  updated_at:string;
  currency:string;
}


export type HarvestGetParams = {
  page?:number;
  per_page?:number;
}

export type HarvestFunctionSet<T> = {
  find:(id:number)=>Promise<T>;
  all:()=>Promise<T[]>;
  get:(params?:HarvestGetParams)=>Promise<T[]>;
}

// For easy definition mapping
export interface IHarvestKeyMap {
  users:IHarvestUser;
  time_entries:IHarvestTimeEntry;
  clients:IHarvestClient;
  contacts:IHarvestContact;
  estimate_item_categories:IHarvestEstimateItemCategory;
  estimates:IHarvestEstimate;
  invoice_item_categories:IHarvestInvoiceItemCategory;
  invoices:IHarvestInvoice;
  projects:IHarvestProject;
  roles:IHarvestRole;
  tasks:IHarvestTask;
}

export type IHarvest = {
  [K in keyof IHarvestKeyMap]:HarvestFunctionSet<IHarvestKeyMap[K]>;
}

declare class Harvest implements IHarvest {
  constructor (account:string, token:string, name:string);



  users: HarvestFunctionSet<IHarvestUser>
  time_entries: HarvestFunctionSet<IHarvestTimeEntry>
  clients: HarvestFunctionSet<IHarvestClient>
  contacts: HarvestFunctionSet<IHarvestContact>
  estimate_item_categories: HarvestFunctionSet<IHarvestEstimateItemCategory>
  estimates: HarvestFunctionSet<IHarvestEstimate>
  invoice_item_categories: HarvestFunctionSet<IHarvestInvoiceItemCategory>
  invoices: HarvestFunctionSet<IHarvestInvoice>
  projects: HarvestFunctionSet<IHarvestProject>
  roles: HarvestFunctionSet<IHarvestRole>
  tasks: HarvestFunctionSet<IHarvestTask>
}

export default Harvest