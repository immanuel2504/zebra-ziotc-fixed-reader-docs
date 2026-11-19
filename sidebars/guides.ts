import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import type { LiteralSidebarKeys } from './literal-keys-guard';

/**
 * Sidebar for the MAIN docs instance — the Guides section.
 *
 * GENERATED FROM THE IA IN .ai-history/019-ia-spec-final.md AND THE URL ARCHITECTURE IN
 * .ai-history/020-documentation-url-architecture.md, and hand-maintained from here on.
 * Order is the top-to-bottom order of 019's tree; labels are its node names verbatim;
 * nesting and depth match it exactly.
 *
 * EVERY CATEGORY LINKS TO A REAL PAGE. Each node is a page, or a category with its own
 * landing page at index.mdx. Docusaurus' synthetic category index is a route with no file,
 * so it cannot be that landing page and cannot carry an intro; every category here takes a
 * doc link instead. The invariant is checkable: searching these four files for the
 * synthetic category-index link type must return no hits outside this comment.
 *
 * ORDER LIVES HERE, NOT IN FRONT MATTER. `sidebar_position` is also set on every page to
 * the same value, but Docusaurus ignores it whenever a sidebar lists items explicitly, as
 * this one does. This array is the effective source of truth; the front-matter field is
 * the declarative echo of it.
 */
import { resources } from './resources';
import { apiIndex } from './api-reference';

/*
 * `satisfies SidebarsConfig` AT THE FOOT OF THIS OBJECT, NOT `: SidebarsConfig` ON THE CONST —
 * changed 2026-09-07, and it is the difference between this file being the source of truth for
 * its own sidebar names and merely claiming to be.
 *
 * `SidebarsConfig` is `{[sidebarId: string]: SidebarItemConfig[] | …}`. An ANNOTATION makes that
 * index signature the declared type of the const, so `keyof typeof sidebars` collapses to
 * `string` and the literal key(s) below are gone from the type system the moment the file is
 * read from anywhere else. `satisfies` checks the identical assignability — every item in here
 * is validated exactly as before, and contextual typing still flows into the literal, so the
 * discriminated `type: 'category' | 'doc' | 'link'` members narrow as they always did — while
 * leaving the inferred type as the literal object. So `keyof` survives.
 *
 * WHO READS IT: src/components/siteSections.ts derives `SidebarName` from
 * `keyof typeof import('@site/sidebars/…').default` across the three files Docusaurus loads as
 * `sidebarPath`. That map is `Record<SidebarName, SiteSection>` and therefore exhaustive, so
 * renaming, adding or removing a sidebar name in this file now fails the BUILD instead of
 * silently dropping the panel header and the breadcrumb ancestors at runtime. Before this
 * change those names were restated by hand in that file with nothing linking the two.
 *
 * DO NOT RE-ADD THE ANNOTATION. It typechecks, it looks tidier, and it silently reopens the
 * seam — the failure mode is a green build and a missing sidebar header, which is exactly the
 * class of defect this project has been closing.
 */
const sidebars = {
  resources,

  // THE /api-reference/ LANDING PAGE'S OWN SIDEBAR. Split into sidebars/api-reference.ts of
  // its own on 2026-09-02 — see that file's header for why it exists, why it is a separate
  // file rather than inline here, and why every leaf below the two category headers is a
  // `link` rather than a `doc`. Imported here, exactly as `resources` is above, because
  // Docusaurus resolves a sidebar by NAME against the one `SidebarsConfig` object this
  // instance's `sidebarPath` points at — never by which file that name was written in.
  apiIndex,

  docs: [
    /* Fixed Reader / Zebra IoT Connector TOC, generated from "Zebra IoT Connector TOC Template 2 (Merged) v8 7.docx".
     * Chapters are categories (docs/guides/<chapter>/index.mdx); numbered topics are pages; third-level items are H2 headings inside their page. */
    {
      type: 'category',
      label: 'Introduction',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--compass',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '👋', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/introduction/index' },
      items: [
        'guides/introduction/zebra-iot-connector-overview',
        'guides/introduction/system-architecture-and-components',
        'guides/introduction/ziotc-interfaces',
        'guides/introduction/deployment-models',
        'guides/introduction/system-and-hardware-requirements',
        'guides/introduction/intended-audience-and-role-paths',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--bolt',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🚀', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/getting-started/index' },
      items: [
        'guides/getting-started/prerequisites-and-pre-installation-checklist',
        'guides/getting-started/install-the-reader-and-connect-antennas',
        'guides/getting-started/discover-access-and-sign-in-to-the-reader',
        'guides/getting-started/configure-regulatory-region-date-and-time',
        'guides/getting-started/verify-reader-readiness-and-status',
        'guides/getting-started/quickstart-first-tag-to-mqtt-in-15-minutes',
      ],
    },
    {
      type: 'category',
      label: 'Network Connectivity',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--sitemap',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🌐', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/network-connectivity/index' },
      items: [
        'guides/network-connectivity/network-connectivity-overview',
        'guides/network-connectivity/ethernet-connectivity',
        'guides/network-connectivity/wi-fi-connectivity',
        'guides/network-connectivity/hotspot-connectivity',
        'guides/network-connectivity/bluetooth-network-connectivity',
        'guides/network-connectivity/cellular-connectivity',
        'guides/network-connectivity/configure-a-proxy-and-firewall-access',
      ],
    },
    {
      type: 'category',
      label: 'Connect the Reader',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--route',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🔌', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/connect-the-reader/index' },
      items: [
        'guides/connect-the-reader/overview',
        'guides/connect-the-reader/connect-to-an-mqtt-broker',
        'guides/connect-the-reader/connect-to-aws-iot-core',
        'guides/connect-the-reader/connect-to-azure-iot-hub',
        'guides/connect-the-reader/send-data-and-events-over-http-post-tcp-or-websocket',
        'guides/connect-the-reader/configure-batching-and-retention',
        'guides/connect-the-reader/edit-delete-or-view-a-connection',
      ],
    },
    {
      type: 'category',
      label: 'RFID Operations and Reader Behavior',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--broadcast',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '📡', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/rfid-operations-and-reader-behavior/index' },
      items: [
        'guides/rfid-operations-and-reader-behavior/how-rfid-control-works',
        'guides/rfid-operations-and-reader-behavior/operating-modes',
        'guides/rfid-operations-and-reader-behavior/antenna-and-rf-settings',
        'guides/rfid-operations-and-reader-behavior/filter-tags-by-tag-id',
        'guides/rfid-operations-and-reader-behavior/select-and-query',
        'guides/rfid-operations-and-reader-behavior/tag-report-content-and-frequency',
        'guides/rfid-operations-and-reader-behavior/tag-access-operations',
        'guides/rfid-operations-and-reader-behavior/start-and-stop-rfid-inventory',
        'guides/rfid-operations-and-reader-behavior/impinj-gen2x-features-and-configuration',
      ],
    },
    {
      type: 'category',
      label: 'BLE Operations',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--broadcast',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '📶', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/ble-operations/index' },
      items: [
        'guides/ble-operations/ble-overview',
        'guides/ble-operations/configure-ble-scanning',
        'guides/ble-operations/start-and-stop-ble-scanning',
        'guides/ble-operations/receive-and-process-ble-events',
      ],
    },
    {
      type: 'category',
      label: 'Management and System Events',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--pulse',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '📣', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/management-and-system-events/index' },
      items: [
        'guides/management-and-system-events/management-events-overview',
        'guides/management-and-system-events/receive-heartbeats',
        'guides/management-and-system-events/receive-gpio-events',
        'guides/management-and-system-events/receive-errors-and-warnings',
        'guides/management-and-system-events/receive-notifications',
        'guides/management-and-system-events/receive-firmware-update-progress-events',
        'guides/management-and-system-events/receive-user-application-events',
      ],
    },
    {
      type: 'category',
      label: 'Run Applications on the Reader',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--grid',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '💻', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/run-applications-on-the-reader/index' },
      items: [
        'guides/run-applications-on-the-reader/on-reader-application-overview',
        'guides/run-applications-on-the-reader/develop-applications',
        'guides/run-applications-on-the-reader/package-and-install-an-application',
        'guides/run-applications-on-the-reader/manage-installed-applications',
      ],
    },
    {
      type: 'category',
      label: 'Build Applications',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--layers',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🔧', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/build-applications/index' },
      items: [
        'guides/build-applications/choose-mqtt-or-rest',
        'guides/build-applications/mqtt-application-development',
        'guides/build-applications/rest-application-development',
        'guides/build-applications/samples',
      ],
    },
    {
      type: 'category',
      label: 'Multi-Reader Deployment',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--sitemap',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🏢', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/multi-reader-deployment/index' },
      items: [
        'guides/multi-reader-deployment/deploy-multiple-readers',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--sliders',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🔒', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/security/index' },
      items: [
        'guides/security/security-overview',
        'guides/security/install-and-manage-certificates',
        'guides/security/secure-reader-access-and-credentials',
        'guides/security/secure-network-mqtt-and-rest-connections',
      ],
    },
    {
      type: 'category',
      label: 'Administration, Monitoring, and Maintenance',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--wrench',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '📊', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/administration-monitoring-and-maintenance/index' },
      items: [
        'guides/administration-monitoring-and-maintenance/monitor-the-reader',
        'guides/administration-monitoring-and-maintenance/logs-and-diagnostics',
        'guides/administration-monitoring-and-maintenance/update-firmware',
        'guides/administration-monitoring-and-maintenance/restart-revert-and-recover',
        'guides/administration-monitoring-and-maintenance/export-and-import-reader-configuration',
        'guides/administration-monitoring-and-maintenance/reader-io-and-indicators',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--wrench',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🔍', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/troubleshooting/index' },
      items: [
        'guides/troubleshooting/troubleshooting-overview',
        'guides/troubleshooting/reader-access-issues',
        'guides/troubleshooting/network-mqtt-and-cloud-connectivity-issues',
        'guides/troubleshooting/authentication-and-certificate-issues',
        'guides/troubleshooting/rfid-reading-and-missing-tag-data',
        'guides/troubleshooting/ble-issues',
        'guides/troubleshooting/missing-events-and-command-issues',
        'guides/troubleshooting/on-reader-application-issues',
      ],
    },
    {
      type: 'category',
      label: 'Use Case Examples',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--route',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '📒', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/use-case-examples/index' },
      items: [
        'guides/use-case-examples/examples',
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--route',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '🔁', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/migration/index' },
      items: [
        'guides/migration/migration-overview',
        'guides/migration/migrate-from-fxconnect',
        'guides/migration/migrate-from-123rfid-desktop',
        'guides/migration/migrate-from-rfid-api3-and-llrp',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      className: 'sidebar-section-header sidebar-icon sidebar-icon--layers',
      collapsible: true,
      collapsed: true,
      customProps: { emoji: '📖', card: 'TODO: one-sentence summary of this chapter.' },
      link: { type: 'doc', id: 'guides/reference/index' },
      items: [
        'guides/reference/rest-api-reference',
        'guides/reference/mqtt-api-reference',
        'guides/reference/key-concepts-and-terminology',
      ],
    },
  ],
} satisfies SidebarsConfig;

/* The literal keys above are load-bearing: src/components/siteSections.ts derives its
 * `SidebarName` union from them. This line fails the build, with the reason and the fix in the
 * error text, if the `: SidebarsConfig` annotation is ever restored on the const and the keys
 * widen to `string`. See sidebars/literal-keys-guard.ts for why that regression is otherwise
 * completely silent. `npm run lint:sidebar-sources` checks this line is still here. */
const _literalKeys: LiteralSidebarKeys<typeof sidebars> = true;
void _literalKeys;

export default sidebars;
