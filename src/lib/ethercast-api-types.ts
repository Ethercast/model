export type SubscriptionStatus = 'active' | 'deactivated';
export const SubscriptionStatuses: SubscriptionStatus[] = ['active', 'deactivated'];

export type SubscriptionType = 'log' | 'transaction';
export const SubscriptionTypes: SubscriptionType[] = ['log', 'transaction'];

export type LogFilterType = 'address' | 'topic0' | 'topic1' | 'topic2' | 'topic3';
export const LogFilterTypes: LogFilterType[] = ['address', 'topic0', 'topic1', 'topic2', 'topic3'];

export type TransactionFilterType = 'from' | 'to' | 'methodSignature';
export const TransactionFilterTypes: TransactionFilterType[] = ['from', 'to', 'methodSignature'];

export type FilterOptionValue = string | string[] | null;
export type LogSubscriptionFilters = { [filterType in LogFilterType]?: FilterOptionValue };
export type TransactionSubscriptionFilters = {
  [filterType in TransactionFilterType]?: FilterOptionValue
};

/**
 * @format uuid
 */
export type ID = string;

export interface Subscription {
  id: ID;
  type: SubscriptionType;
  timestamp: number;
  secret: string;
  user: string;
  name: string; // reasonable max length
  description?: string; // reasonable max length - longer
  webhookUrl: string;
  status: SubscriptionStatus;
  subscriptionArn: string;
}

export interface LogSubscription extends Subscription {
  type: 'log';
  filters: LogSubscriptionFilters;
}

export interface TransactionSubscription extends Subscription {
  type: 'transaction';
  filters: TransactionSubscriptionFilters;
}

export interface CreateSubscriptionRequest
  extends Pick<Subscription, 'type' | 'name' | 'description' | 'webhookUrl'> {
  filters: LogSubscriptionFilters | TransactionSubscriptionFilters;
}

export interface CreateTransactionSubscriptionRequest extends CreateSubscriptionRequest {
  type: 'transaction';
  filters: TransactionSubscriptionFilters;
}

export interface CreateLogSubscriptionRequest extends CreateSubscriptionRequest {
  type: 'log';
  filters: LogSubscriptionFilters;
}

export interface WebhookReceiptResult {
  statusCode: number;
  success: boolean;
  error?: string;
}

export interface WebhookReceipt {
  id: ID;
  subscriptionId: ID;
  ttl: number;
  url: string;
  timestamp: number;
  result: WebhookReceiptResult;
}

export interface CreateApiKeyRequest {
  name: string;
  scopes: Scope[];
}

export interface ApiKey extends CreateApiKeyRequest {
  id: ID;
  user: string;
  secret: string;
}

export enum Scope {
  READ_SUBSCRIPTION = 'read:subscription',
  CREATE_SUBSCRIPTION = 'create:subscription',
  DEACTIVATE_SUBSCRIPTION = 'deactivate:subscription',
  READ_API_KEY = 'read:apiKey',
  CREATE_API_KEY = 'create:apiKey',
  DEACTIVATE_API_KEY = 'deactivate:apiKey'
}

export interface GetExampleRequest {
  type: SubscriptionType;
}

export interface GetExampleTransactionRequest extends GetExampleRequest {
  type: 'transaction';
  filters: TransactionSubscriptionFilters;
}

export interface GetExampleLogRequest extends GetExampleRequest {
  type: 'log';
  filters: LogSubscriptionFilters;
}

export type Schema =
  | SubscriptionStatus
  | SubscriptionType
  | LogFilterType
  | TransactionFilterType
  | FilterOptionValue
  | LogSubscriptionFilters
  | TransactionSubscriptionFilters
  | Subscription
  | LogSubscription
  | TransactionSubscription
  | CreateSubscriptionRequest
  | CreateTransactionSubscriptionRequest
  | CreateLogSubscriptionRequest
  | WebhookReceiptResult
  | WebhookReceipt
  | CreateApiKeyRequest
  | ApiKey
  | Scope
  | GetExampleRequest
  | GetExampleTransactionRequest
  | GetExampleLogRequest;
